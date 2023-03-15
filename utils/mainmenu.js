const mainMenu = [
	{ number: 1, text: "Place An Order" },
	{ number: 99, text: "Checkout Order" },
	{ number: 98, text: "Check Order History" },
	{ number: 97, text: "Check Current Order" },
	{ number: 0, text: "Cancel Order" },
];

const foodMenu = [
	{ number: 1, food: "Milk", price: 700 },
	{ number: 2, food: "Pizza", price: 2500 },
	{ number: 3, food: "Amala", price: 800 },
	{ number: 4, food: "Jollof Rice", price: 1400 },
	{ number: 5, food: "Egusi", price: 1000 },
];

module.exports = {
	mainMenu,
	foodMenu,
};
