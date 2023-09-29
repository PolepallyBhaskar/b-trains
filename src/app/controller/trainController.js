import TrainHelper from '../helper/trainHelper.js';

class TrainController {

    static async create(req, res) {
        try {
           
            let result = await TrainHelper.create(req);
            res.send(result);
        } catch (error) {
            res.status(500).send(error.message);
        }

    }
    static async update(req, res) {
        try {
            let result = await TrainHelper.update(req);
            res.send(result);
        } catch (error) {
            res.status(500).send(error.message);
        }

    }

    static async delete(req, res) {
        try {
            let result = await TrainHelper.delete(req);
            res.send(result);
        } catch (error) {
            res.status(500).send(error.message);
        }

    }

    static async getTrainDetails(req, res) {
        try {
            let result = await TrainHelper.getTrainDetails(req);
            res.send(result);
        } catch (error) {
            res.status(500).send(error.message);
        }

    }
    static async getAllTrains(req, res) {
        try {
            let result = await TrainHelper.getAllTrains(req);
            res.send(result);
        } catch (error) {
            res.status(500).send(error.message);
        }
    }
}

export default TrainController;
