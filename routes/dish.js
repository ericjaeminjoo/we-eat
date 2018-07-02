"use strict";

const express = require("express");
const router = express.Router();

module.exports = knex => {

  // Gets the appetizers from db
  router.get("/appetizers", (req, res) => {
    knex("dish")
      .select()
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
      .select()
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
      .select()
      .where({ category: "teriyaki" })
      .then(result => {
        res.json(result);
      })
      .catch(error => {
        console.log("Error: ", error);
        return Promise.resolve();
      });
  });

  // Gets the teriyaki from db
  router.get("/dish/:id", (req, res) => {
    const dish_id = req.params.id;
    knex("dish")
      .select()
      .where({id: dish_id})
      .then(result => {
        res.json(result);
      })
      .catch(error => {
        console.log("Error: ", error);
        return Promise.resolve();
      });
  });

  // Saves the order into the db
  router.post("/order", (req, res) => {
    let order_id = 0;
    knex("orders")
      .insert({ phone: req.body.telephone,
                sub_total: req.body.subTotal,
                service_fee: req.body.serviceFee,
                total: req.body.total,
              }).returning('id')
      .then(results => {
        var arr = [];
        console.log(results);
        for(let item of req.body.cart){
          arr.push({  qty: item.qty,
                      line_total: item.lineTotal,
                      dish_id: item.id,
                      order_id: results[0]
                  })
            order_id = results[0];
        }
      knex("dish_order").insert(arr)
        .then(results_two => {
         console.log(results_two);
           const accountSid = 'AC7052a5c2235109743ef7b375ee5110c4';
           const authToken = '7e4230f32a51eba5f7865b62bf4d5a9e';
           const client = require('twilio')(accountSid, authToken);
           client.messages
             .create({
                body: `
                Order #${order_id}
                advise client when order
                is almost ready for pickup.`,
                from: '+14387956461 ',
                to: '+15145125510',
              })
        })
     })
    .catch(error => {
       console.log("Error: ", error);
       return Promise.resolve();
    })
 });

  router.get("/orders/process", (req, res) => {
    knex("orders")
      .select()
      .whereNull("time_complete")
      .then(result => {
        res.json(result);
      })
      .catch(error => {
        console.log("Error: ", error);
        return Promise.resolve();
    });
  });

  router.post("/orders/ready", (req, res) => {
    const date = new Date().toISOString();
    knex('orders')
      .update('time_complete', date)
      .where({id: req.body.id})
      .then(result => {
        const accountSid = 'AC7052a5c2235109743ef7b375ee5110c4';
        const authToken = '7e4230f32a51eba5f7865b62bf4d5a9e';
        const client = require('twilio')(accountSid, authToken);
        client.messages
            .create({
              body: `
              Order #${req.body.id}
              Your order will be ready to pick up in 15 mins.
              Enjoy your meal!`,
              from: '+14387956461 ',
              to: req.body.phone
            })
      })
      .catch(error => {
        console.log("Error: ", error);
        return Promise.resolve();
    });
  });
  return router;
};
