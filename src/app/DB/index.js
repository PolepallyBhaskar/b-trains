import mongoose from 'mongoose';

const mongoOptions = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
};

function initMongoConnection(connectionString) {

    return new Promise((resolve, reject) => {

        console.log('========= Initiating Mongo DB Connection =========');

        mongoose.connect(connectionString, mongoOptions).then(() => {
            console.log('=========  Connected to Mongo DB =========');
            resolve();
        }).catch((err) => {
            console.error('========= Error to Mongo DB =========\n' + err);
            reject(err);
        });
    });
}


export { initMongoConnection };
