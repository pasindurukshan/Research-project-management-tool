const express = require('express');
const router = express.Router();


const PresentationController = require('../controllers/presentation-controller');
const WorkshopController = require('../controllers/workshop-controller');
const RequestSupervisorController = require('../controllers/request-supervisor-controller');
const RequestCoSupervisorController = require('../controllers/request-co-supervisor-controller');

router.post('/presentation', PresentationController.createPresentation);
router.get('/presentation/single/:id', PresentationController.getSinglePresentation);
router.get('/workshop/single/:id', WorkshopController.getSingleWorkshop);
router.post('/workshop', WorkshopController.createWorkshop);
router.get('/requestsupervisor/single/:id', RequestSupervisorController.getSingleRequestSupervisor);
router.post('/requestsupervisor', RequestSupervisorController.createRequestSupervisor);
router.get('/requestcosupervisor/single/:id', RequestCoSupervisorController.getSingleRequestCoSupervisor);
router.post('/requestcosupervisor', RequestCoSupervisorController.createRequestCoSupervisor);



module.exports = router;