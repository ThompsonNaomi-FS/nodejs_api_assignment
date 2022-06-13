const axios = require('axios');
require("dotenv").config();

const catService = async() => {
    console.log("Real Facts");
    return await axios.get(`${process.env.catURL}s`);
};

const catServiceByID = async(id) => {
    console.log("Real Facts by ID");
    return await axios.get(`${process.env.catURL}?max_length=${id}`);
};

module.exports = { catService, catServiceByID };