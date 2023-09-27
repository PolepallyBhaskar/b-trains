
import { Train } from '../models/Train.js'
import _ from 'lodash';

class TrainHelper {

    static async create(req) {
        let trainObj = new Train(_.pick(req.body, ['name']));
        
        return await trainObj.save();

    }
    static async update(req) {
        let updateObj = {};
        for (let key in req.body) {
            if (req.body[key] != null && key != '_id') {
                updateObj[key] = req.body[key];
            }
        }
        updateObj['updatedAt'] = Date.now();

        return await Train.findOneAndUpdate(
            {
                _id: req.body.trainId
            },
            updateObj
        );
    }
    static async delete(req) {

        return await Train.deleteOne({ _id: req.body.trainId })

    }
    static async getTrainDetails(req) {
        return await Train.findById(req.body.trainId)

    }
    static async getAllTrains() {
        return await Train.find()

    }

}
export default TrainHelper