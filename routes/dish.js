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

  // Gets the teriyaki from db
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

  // Saves the order into the db
  router.post("/order", (req, res) => {
    knex("orders")
      .insert({ phone: req.body.telephone,
                sub_total: req.body.subTotal,
                service_fee: req.body.serviceFee,
                total: req.body.total,
              }).returning('id')
      .then(results=>{
        var arr = [];
        console.log(results);
        for(let item of req.body.cart){
          arr.push({  qty: item.qty,
                      line_total: item.lineTotal,
                      dish_id: item.id,
                      order_id: results[0]
                  })
        }
      knex("dish_order").insert(arr)
        .then(results_two => {
          console.log(results_two);
        })
     })
    .catch(error => {
       console.log("Error: ", error);
       return Promise.resolve();
    })
 });

  return router;
};
