const express = require('express');
const router = express.Router();


const PresentationController = require('../controllers/presentation-controller');


router.post('/presentation', PresentationController.createPresentation);
router.get('/presentation/single/:id', PresentationController.getSinglePresentation);




module.exports = router;