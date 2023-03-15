/* eslint-disable node/no-unsupported-features/es-syntax */
// import mongoose from 'mongoose';
// const
const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const MessageSchema = new Schema(
	{
		sessionID: {
			type: String,
			required: [true, "Enter a Session ID"],
			trim: true,
		},
		userMessage: {
			username: String,
			text: String,
			time: String,
		},
		botMessage: {
			username: String,
			text: String,
			time: String,
		},
	},
	{ timestamps: true }
);
module.exports = mongoose.model("Message", MessageSchema); 
