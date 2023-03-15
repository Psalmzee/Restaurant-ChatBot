const SessionDB = require("../model/sessionModel");
const messageModel = require("../model/messageModel");
const formatMessage = require("../utils/message");
const { mainMenu, foodMenu } = require("../utils/mainmenu");
const formatArray = require("../utils/formatArray");
const { config } = require("../config/config");

exports.saveSessionID = async (sessionID) => {
	const checksessionID = await SessionDB.findOne({ sessionID });

	if (!checksessionID) {
		await SessionDB.create({ sessionID });
	}
};

exports.loadMessage = async (io, sessionID) => {
	const oldMessages = await messageModel.find({ sessionID });

	if(!oldMessages) return;

	oldMessages.forEach((message) => {
		io.to(message.sessionID).emit("user message", message.userMessage);
		io.to(message.sessionID).emit("bot message", message.botMessage);
	});
}

exports.welcomeMessage = (io, sessionID) => {
	io.to(sessionID).emit(
		"bot message",
		formatMessage(config.botName, "Welcome to Samson Okeji Restaurant Bot Service! <br>Hi, How may I serve you today?")
	);
};

exports.mainMenu = (io, sessionID) => {
	let botMessage = formatMessage(config.botName, formatArray("mainMenu",mainMenu));
	io.to(sessionID).emit("bot message", botMessage);
	return botMessage;
};

exports.menu = (io, sessionID) => {
	let botMessage = formatMessage(
		config.botName,
		formatArray("Select One Item To Add to Your Cart", foodMenu)
	);
	io.to(sessionID).emit("bot message", botMessage);
	return botMessage;
};

exports.checkOutOrder = async (io, sessionID) => {
	const sessionOrder = await SessionDB.findOne({ sessionID });

	let botMessage = "";
	if (sessionOrder.currentOrder.length < 1) {
		botMessage = formatMessage(
			config.botName,
			"You have not ordered anything yet!"
		);
		io.to(sessionID).emit("bot message", botMessage);
	} else {
		sessionOrder.placedOrder = [
			...sessionOrder.currentOrder,
			...sessionOrder.placedOrder,
		];
		sessionOrder.currentOrder = [];
		await sessionOrder.save();

		botMessage = formatMessage(config.botName, "Order Placed Successfully!");

		io.to(sessionID).emit("bot message", botMessage);
	}
	io.to(sessionID).emit("bot message", formatMessage(config.botName, mainMenu));

	return botMessage;
};

exports.orderHistory = async (io, sessionID) => {
	const sessionOrder = await SessionDB.findOne({ sessionID });

	let botMessage = "";

	if (sessionOrder.placedOrder.length < 1) {
		botMessage = formatMessage(
			config.botName,
			"You do not have any order history yet!"
		);
		io.to(sessionID).emit("bot message", botMessage);
	} else {
		botMessage = formatMessage(
			config.botName,
			formatArray("Your Order History", sessionOrder.placedOrder)
		);
		io.to(sessionID).emit("bot message", botMessage);
	}
	io.to(sessionID).emit("bot message", formatMessage(config.botName, mainMenu));

	return botMessage;
};

exports.currentOrder = async (io, sessionID) => {
	const sessionOrder = await SessionDB.findOne({ sessionID });

	let botMessage = "";

	if (sessionOrder.currentOrder.length < 1) {
		botMessage = formatMessage(config.botName, "You do not have any order yet!");
		io.to(sessionID).emit("bot message", botMessage);
	} else {
		botMessage = formatMessage(
			config.botName,
			formatArray("Your Current Order", sessionOrder.currentOrder)
		);
		io.to(sessionID).emit("bot message", botMessage);
	}

	io.to(sessionID).emit("bot message", formatMessage(config.botName, mainMenu));

	return botMessage;
};

exports.cancelOrder = async (io, sessionID) => {
	const sessionOrder = await SessionDB.findOne({ sessionID });

	let botMessage = "";

	if (sessionOrder.currentOrder.length < 1) {
		botMessage = formatMessage(config.botName, "You do not have any order yet!");

		io.to(sessionID).emit("bot message", botMessage);
	} else {
		botMessage = formatMessage(config.botName, "Order Cancelled!");

		sessionOrder.currentOrder = [];
		await sessionOrder.save();

		io.to(sessionID).emit("bot message", botMessage);
	}
	//TODO: save the resposne to the database
	io.to(sessionID).emit("bot message", formatMessage(config.botName, mainMenu));

	return botMessage;
};

exports.saveOrder = async (io, sessionID, number) => {
	const sessionOrder = await SessionDB.findOne({ sessionID });

	let botMessage = "";

	if (number === 1) {
		sessionOrder.currentOrder.push(foodMenu[0]);
	}
	if (number === 2) {
		sessionOrder.currentOrder.push(foodMenu[1]);
	}
	if (number === 3) {
		sessionOrder.currentOrder.push(foodMenu[2]);

	}
	if (number === 4) {
		sessionOrder.currentOrder.push(foodMenu[3]);

	}
	if (number === 5) {
		sessionOrder.currentOrder.push(foodMenu[4]);
	}

	await sessionOrder.save();

	botMessage = formatMessage(
		config.botName,
		formatArray("Order Added", sessionOrder.currentOrder)
	);
	io.to(sessionID).emit("bot message", botMessage);

	io.to(sessionID).emit("bot message", formatMessage(config.botName, mainMenu));

	return botMessage;
};
