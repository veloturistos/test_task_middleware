const companiesService = require('../services/companies.service.js');
const companiesMidleware = require('../midleware/companies.midleware.js');

// method with logic for request processing
const getCompanies = async(req, res, next)=>{ 
    const { id } = req.params;
    console.log('Mew request for company with Id ' + id)
    //id validity check
    if (isNaN(id)) {
       res.status(404);
       res.json({
         error : "404 Id is not provided or not a number",
         error_description: "Id is not provided or not a number" 
       });
       return res.status(404).end();
    }

    //obtaining data by id 
    const company = await companiesService.getCompanyById(id);

    // result validation if company empty or it is not a string with XML
    if (!company){
      res.status(404);
      res.json({
        error : "404 Company was not found", 
        error_description: "Company was not found" 
      });
      return res.status(404).end();
      //processing errors from Axios
    } else if(typeof company === 'object') {
       res.status(company.response.status);
       res.json({
         error : company.response.status + ` Request failed on id ${id}`, 
         error_description: `Request failed on id ${id}`
       });
       return res.status(404).end();
    }

    //preparation of data for required format
    let preparedCompany = companiesMidleware.convertCompanyXMLtoJSON(company)

    //successful result of the request 
    res.status(200);
    console.log(`Result on id ${id} sended`);
    return res.json(preparedCompany);
} 
  
// Export of all methods as object 
module.exports = { 
    getCompanies
}