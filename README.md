# Restaurant-ChatBot


This is a chatbot for a restaurant that allows users to place an order, cancel order, check their order history (current or old), and saves their session and chat history. The chatbot is built using Node.js and Socket.IO, and is designed to provide a seamless and convenient experience for customers who want to order food without having to visit the restaurant or make a phone call.

### Restaurant-ChatBot | SAMSON OKEJI
<img src="Screenshot-landingPage.PNG"/>

### Deployed/Live link
---

-   [Restaurant-ChatBot]("https://sammy-restaurant-bot.onrender.com")


### Technologies:

---

-   Node.js
-   Express.js
-   MongoDB
-   Socket.IO
-   Express-Session
-   Moment.js  

### Features

---
#### The following are the features of the restaurant chatbot:
-   Place an Order: Users can place an order food by entering the corresponding number of the item they want from the menu.
-   Cancel order: Users can cancel their order by entering 0 and it cancels their current order cart
-   Check order history: Users can check their current or old order history by entering the corresponding number.
-   Save session and chat history: The chatbot saves the user's session and chat history, so they can resume their order or check their history at any time.



### Getting Started

---

1. Clone the repository:
    -`https://github.com/Psalmzee/Restaurant-ChatBot.git`
2. Install all  dependencies:
    - `npm install`
3. Create a .env file in the root directory using the example.env file as a guide 

4. Start the application:
    - `npm run dev`
5. Open the application in your browser:
    - `http://localhost:9001`

### Usage

---

To use the restaurant chatbot, follow these steps:

-   Visit the chatbot site [Restaurant-ChatBot]("https://sammy-restaurant-bot.onrender.com") on your device


-   The chatbot will greet you and when you respond, it will return the available options for you to choose from.
-   You will be asked to:
    -   Enter "1" to order food

    -   Enter "99" to checkout your order 

    -   Enter "98" to see old orders

    -   Enter "97" to see your current order

    -   Enter "0" to cancel your order
   
-  If you select "1" to order food, the chatbot will present you with a menu of items with corresponding numbers. You can enter the number of the item you want to order.
-  If you select "99" to checkout your order, the chatbot will let you know that your order has been placed and will show the main menu.
-  If you select "98" to see old orders, the chatbot will show you your old orders.
-  If you select "97" to see your current order, the chatbot will show you your current order.
-  If you select "0" to cancel your order, the chatbot will let you know that your order has been cancelled and will show the main menu.


### Disclaimer

---

For learning purpose only!
