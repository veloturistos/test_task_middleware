//xml to json converter NPM https://www.npmjs.com/package/xml-js
const convert = require('xml-js');

const convertCompanyXMLtoJSON =  (xml) => { 
    let company;
    try {
        //xonverting XML to JSON string
        let convertedCompany =  convert.xml2json(xml, {compact: true, spaces: 4});
        //parse JSON string into object
        let companyParsed = JSON.parse(convertedCompany);
        //preparing object with required data format
        company = {
            "id": parseInt(companyParsed.Data.id._text),
            "name": companyParsed.Data.name._text,
            "description": companyParsed.Data.description._text,
        }
       
    } catch (error) {
        console.error(error);
        return null;

    }
    //sending result back to controller
    console.log('XML to JSON result ' + JSON.stringify(company));
    return company;
}
// Export of all methods as object 
module.exports = { 
    convertCompanyXMLtoJSON
}