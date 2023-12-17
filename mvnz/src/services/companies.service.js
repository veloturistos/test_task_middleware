//Request processing NPM https://www.npmjs.com/package/axios
const axios = require('axios');
require('dotenv').config();
//static URL from .env file
const url = process.env.URL;


//extraction company data from the URL
const getCompanyById =  async(id) => { 
    let company;
    //replacing stub to real id
    let prepUrl = url.replace("{id}",id)
    console.log('URL to obtain company data ' + prepUrl)
    try {
        //processing request         
        const response = await axios.get(prepUrl);
        console.log("Response " + response.data);
        company = response.data;
    } catch (error) {
        //sending error from Axios back to controller
        console.error(error);
        return error;
    }
    return company;
}
// Export of all methods as object 
module.exports = { 
    getCompanyById
}