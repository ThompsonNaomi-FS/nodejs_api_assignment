const axios = require('axios');
require("dotenv").config();

const boredService = async() => {
    console.log("Real Activities");
    return await axios.get(`${process.env.boredURL}`);
};

const boredServiceByID = async(key) => {
    console.log("Real Activities by ID");
    return await axios.get(`${process.env.boredURL}${key}`);
};

module.exports = { boredService, boredServiceByID };