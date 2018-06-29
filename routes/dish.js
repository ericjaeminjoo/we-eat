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
<<<<<<< HEAD
      });
=======
      })
>>>>>>> 0532a97fd84a54fcfda1e5ca8952d723b781d23e
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
<<<<<<< HEAD
      });
=======
      })
>>>>>>> 0532a97fd84a54fcfda1e5ca8952d723b781d23e
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
<<<<<<< HEAD
      .catch(error => {
        console.log("Error: ", error);
        return Promise.resolve();
      });
=======
>>>>>>> 0532a97fd84a54fcfda1e5ca8952d723b781d23e
  });

  return router;
};
