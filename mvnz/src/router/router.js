const { Router } = require('express');
const asyncHandler = require('express-async-handler')
const companiesController = require('../controllers/companies.controller.js');
const router = new Router();

// routing request processing to controller
router.get('/companies/:id',  asyncHandler((req, res, next) => {return companiesController.getCompanies(req, res,next)}));


module.exports = router;