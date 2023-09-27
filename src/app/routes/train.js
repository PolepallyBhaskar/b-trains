import express from 'express';
const router = express.Router();
import TrainController from '../controller/trainController.js';

router.get('/create', TrainController.create);
router.post('/update', TrainController.update);
router.post('/delete', TrainController.delete);
router.post('/get', TrainController.getTrainDetails);
router.post('/delete', TrainController.getAllTrains);


export default router;
