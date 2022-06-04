const express = require('express');
const router = express.Router();


const PresentationController = require('../controllers/presentation-controller');
const WorkshopController = require('../controllers/workshop-controller');
const RequestSupervisorController = require('../controllers/request-supervisor-controller');
const RequestCoSupervisorController = require('../controllers/request-co-supervisor-controller');



router.post('/presentation', PresentationController.createPresentation);
router.get('/presentation/single/:id', PresentationController.getSinglePresentation);
router.get('/workshop/', WorkshopController.getSingleWorkshop);
router.post('/workshop', WorkshopController.createWorkshop);
router.get('/requestsupervisor/', RequestSupervisorController.getSingleRequestSupervisor);
router.post('/requestsupervisor', RequestSupervisorController.createRequestSupervisor);
router.get('/requestcosupervisor/', RequestCoSupervisorController.getSingleRequestCoSupervisor);
router.post('/requestcosupervisor', RequestCoSupervisorController.createRequestCoSupervisor);
router.put('/updaterequestcosupervisor/:id', RequestCoSupervisorController.updateRequestCoSupervisor);




module.exports = router;