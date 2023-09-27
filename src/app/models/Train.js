
import mongoose from 'mongoose';

let schema = new mongoose.Schema(
    {
        name: {
            type: Number,
            required: true,
        },
        trainType: {
            type: String,
            required: true,
            enum: ['GOODS', 'EXPRESS', 'PASSENGER', 'SUPER-FAST'] //Express, Passenger and Super Fast.
        },
        avgSpeed: {
            type: Number,
            required: true,
        },
        depStation: {
            type: String,
            required: true,
        },
        curStation: {
            type: String,
            required: true,
        },
        eta: {
            type: Date,
            required: true,
        },
    },
    {
        timestamps: true,
    })


export const Train = mongoose.model('Train', schema);


