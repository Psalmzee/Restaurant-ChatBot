/* eslint-disable node/no-unsupported-features/es-syntax */
// import mongoose from 'mongoose';
// const 
const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const SessionSchema = new Schema(
    {
        sessionID: {
            type: String,
            required: [true, 'Enter a Session ID'],
            trim: true
        },        
        placedOrder: [
            {
                number: Number,
                food: String,
                price: Number
            }
        ],
        currentOrder: [
            {
                number: Number,
                food: String,
                price: Number
            }
        ]
    },
    { timestamps: true }
);

module.exports = mongoose.model('Session', SessionSchema);
