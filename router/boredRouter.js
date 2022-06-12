const express = require('express');
const boredRouter = express.Router();
const { boredService, boredServiceByID } = require('../services/boredService');

boredRouter.get("/", (req, res, next) => {
    boredService().then(result => {
        res.status(200).json(result.data);
    })
    .catch(err => {
        res.status(500).json({
            error: {
                message: error.message,

            },
        });
    });
});

boredRouter.get("/?key=:key", (req, res, next) => {
    boredServiceByID(req.params.key).then(result => {
        res.status(200).json(result.data);
    })
        .catch(err => {
            res.status(500).json({
                error:{
                message: err.message
            },
        });
    });
});

module.exports = boredRouter;