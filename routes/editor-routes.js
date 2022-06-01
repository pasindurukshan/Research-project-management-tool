const express = require('express');
const router = express.Router();


const PresentationController = require('../controllers/presentation-controller');
const WorkshopController = require('../controllers/workshop-controller');

router.post('/presentation', PresentationController.createPresentation);
router.get('/presentation/single/:id', PresentationController.getSinglePresentation);
router.get('/workshop/single/:id', WorkshopController.getSingleWorkshop);
router.post('/workshop', WorkshopController.createWorkshop);



module.exports = router;