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

  // Puts the cart in the db
  router.post("/order", (req, res) => {
  
   
    knex.insert({phone: req.body.telephone, service_fee: req.body.serviceFee, sub_total: req.body.subTotal, total: req.body.total}).returning('id').into('orders')
      .then(results=>{
        var arr = []
        console.log(results)
        for(let element of req.body.cart){
          arr.push({qty: element.qty, special_inst: element.special_inst, dish_id: element.id,order_id: results[0] })
        }
        knex.insert(arr).into('dish_order').then(results_two => {
          res.redirect('/')
        })
      })
      .catch(error => {
        console.log("Error: ", error);
        return Promise.resolve();
      })
  });

  return router;
};
