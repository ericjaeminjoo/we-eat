"use strict";

const express = require("express");
const router = express.Router();

module.exports = knex => {
  // Gets the dish added to cart from db
  router.get("/cart:id", (req, res) => {
    const dish_id = req.params.id;
    knex("dish")
      .select("*")
      .where({id: dish_id})
      .then(result => {
        res.json(result);
      })
      .catch(error => {
        console.log("Error: ", error);
        return Promise.resolve();
      });
  });

  // Gets all the dishes added to cart from db
  // router.get("/cart", (req, res) => {
  //   knex("dish")
  //     .select("*", "image_url")
  //     .where({ category: "appetizers" })
  //     .then(result => {
  //       res.json(result);
  //     })
  //     .catch(error => {
  //       console.log("Error: ", error);
  //       return Promise.resolve();
  //     });
  // });

  return router;
};
