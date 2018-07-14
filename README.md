# We Eat

## About the project

We Eat is a web app where the client can choose any delicious Sukiyaki dishes and then change the quantity as he or she likes! Before checkout, the client has to review his order and enter his phone number to get notified when the order is ready for pick up. When the client checkouts, the restaurant gets notified by sms, and then reply to the client with a time for pick up.

#### Project setup

The project is built as a full stack web app using Node, Express, jQuery, AJAX, Twilio API, HTML5, CSS3 and PosgreSQL.

## Getting Started

1. Install all dependencies using the npm install command.
2. Run `knex migrate:latest` in your terminal.
3. Set up fake data by running `knex seed:run` in terminal.
4. Sign up for a Twilio account and Get a Twilio phone number.
5. Install `npm twilio` and `npm ngrok` to send and receive sms notifications.
6. Use the Account Sid and Authentication Token provided by Twilio to setup the api with the server.
7. Run the server: `npm run local`.
8. Visit `http://localhost:8080/`.

The restaurant can see the ongoing orders by going to `http://localhost:8080/orders.html` and then click the ready button to notify the client.

## Dependencies

- Node 5.10.x or above
- NPM 3.8.x or above
- Body-parser 1.15.x or above
- Dotenv 2.0.x or above
- Ejs 2.4.x or above
- Express 4.13.x or above
- Express-session 1.15.x or above
- Faker 4.1.x or above
- Knex 0.11.x or above
- Knex-logger 0.1.x or above
- Morgan 1.7.x or above
- Node-sass 4.9.x or above
- Node-sass-middleware 0.11.x or above
- Pg 6.0.x or above
- Twilio 3.17.x or above

## App in action

#### Main page - Menu
!["screenshot-main-page-menu.png"](https://github.com/JJMin/we-eat/blob/feature/impl-api/docs/screenshot-main-page-menu.png?raw=true)

#### Main page - Add dish items to cart
!["screenshot-main-page-menu-add-to-cart.png"](https://github.com/JJMin/we-eat/blob/feature/impl-api/docs/screenshot-main-page-menu-add-to-cart.png?raw=true)

#### Checkout page - Review the cart
!["screenshot-page-cart-review-checkout.png"](https://github.com/JJMin/we-eat/blob/feature/impl-api/docs/screenshot-page-cart-review-checkout.png?raw=true)

#### Checkout page - Enter phone number
![screenshot-page-cart-checkout-phone-number-required.png](https://github.com/JJMin/we-eat/blob/feature/impl-api/docs/screenshot-page-cart-checkout-phone-number-required.png?raw=true)

#### Confirmation page - Checkout complete
![screenshot-page-confirmation-order-checkout.png](https://github.com/JJMin/we-eat/blob/feature/impl-api/docs/screenshot-page-confirmation-order-checkout.png?raw=true)

#### Restaurant receives an sms notification - New order
![screenshot-sms-restaurant-receive-order.png](https://github.com/JJMin/we-eat/blob/feature/impl-api/docs/screenshot-sms-restaurant-receive-order.png?raw=true)

#### Orders page in process - Listing of orders
![screenshot-page-orders-in-process.png](https://github.com/JJMin/we-eat/blob/feature/impl-api/docs/screenshot-page-orders-in-process.png?raw=true)

#### Client receives an sms notification for an eta - Order ready for pick up
![screenshot-sms-client-pickup-ready.JPG](https://github.com/JJMin/we-eat/blob/feature/impl-api/docs/screenshot-sms-client-pickup-ready.JPG?raw=true)
