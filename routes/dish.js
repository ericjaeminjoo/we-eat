"use strict";

const express = require("express");
const router = express.Router();

module.exports = knex => {

  // Gets the appetizers from db
  router.get("/appetizers", (req, res) => {
    knex("dish")
      .select("id", "name", "description", "price", "image_url")
      .where({ category: "appetizers" })
      .then(result => {
        res.json(result);
      })
      .catch(error => {
        console.log("Error: ", error);
        return Promise.resolve();
      });
  });

  // Gets the soups from db
  router.get("/soups", (req, res) => {
    knex("dish")
      .select("id", "name", "description", "price", "image_url")
      .where({ category: "soups" })
      .then(result => {
        res.json(result);
      })
      .catch(error => {
        console.log("Error: ", error);
        return Promise.resolve();
      });
  });

  // Gets the teriyaki from db
  router.get("/teriyaki", (req, res) => {
    knex("dish")
      .select("id", "name", "description", "price", "image_url")
      .where({ category: "teriyaki" })
      .then(result => {
        res.json(result);
      })
      .catch(error => {
        console.log("Error: ", error);
        return Promise.resolve();
      });
  });

  // Gets a specific dish item from db
  router.get("/dish/:id", (req, res) => {
    const dish_id = req.params.id;
    knex("dish")
      .select("id", "name", "description", "price", "image_url")
      .where({id: dish_id})
      .then(result => {
        res.json(result);
      })
      .catch(error => {
        console.log("Error: ", error);
        return Promise.resolve();
      });
  });


  // Gets the order from db
  router.get("/order", (req, res) => {
    // const dish_order_id = req.params.id;
    knex("dish_order")
      .select("qty", "special_inst", "dish_id", "order_id")
      .where({ dish_order })
      .then(result => {
        res.json(result);
      })
      .catch(error => {
        console.log("Error: ", error);
        return Promise.resolve();
      });
  });


  // Post the final cart for checkout
  router.post("/dish_order", (req, res) => {

    const cartObj = req.body.cart;

    for (let cartElement of cartObj) {
      knex('dish_order')
        .insert([{id: cartElement.id, name: cartElement.name, description: cartElement.description, price: cartElement.price, qty: cartElement.qty}])
        .select('*')
        .catch(error => {
          console.log("Error: ", error);
          return Promise.resolve();
        })
        // .finally(() => {
        //   knex.destroy();
        // })
    }
  });

  
  // Post the final checkout
  router.post("/order", (req, res) => {

    knex('order')
      .insert([{phone: req.body.phone, time_stamp: knex.fn.now(), time_pickup: req.body.time_pickup}])
      .select('*')
      .catch(error => {
        console.log("Error: ", error);
        return Promise.resolve();
      })
      .then(result.id => {
        knex('dish_order').insert({})
      })
      // .finally(() => {
      //   knex.destroy();
      // })
  }); 

  return router;
};

// const param1 = process.argv[2];
// const param2 = process.argv[3];
// const param3 = process.argv[4];

// knex('famous_people')
//   .insert([{first_name: param1, last_name: param2, birthdate: param3}])
//   .select('*')
//   .catch(function(error) {
//     console.error(error)
//   })
//   .finally(() => {
//     console.log("Query is completed!");
//     knex.destroy();
//   });