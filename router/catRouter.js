const express = require('express');
const catRouter = express.Router();
const { catService, catServiceByID } = require('../services/catService');

catRouter.get("/", (req, res, next) => {
    catService().then(result => {
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

catRouter.get("/gi:id", (req, res, next) => {
    catServiceByID(req.params.id).then(result => {
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

module.exports = catRouter;