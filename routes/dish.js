"use strict";

const express = require("express");
const router = express.Router();

module.exports = knex => {
  router.get("/appetizers", (req, res) => {
    knex("dish")
      .select("name", "description", "price", "image_url")
      .where({ category: "appetizers" })
      .then(result => {
        res.json(result);
      })
      .catch(error => {
        console.log("Error: ", error);
        return Promise.resolve();
      })
  });

  router.get("/soups", (req, res) => {
    knex("dish")
      .select("name", "description", "price", "image_url")
      .where({ category: "soups" })
      .then(result => {
        res.json(result);
      })
      .catch(error => {
        console.log("Error: ", error);
        return Promise.resolve();
      })
  });

  router.get("/teriyaki", (req, res) => {
    knex("dish")
      .select("name", "description", "price", "image_url")
      .where({ category: "teriyaki" })
      .then(result => {
        res.json(result);
      })
      .catch(error => {
        console.log("Error: ", error);
        return Promise.resolve();
      })
  });

  return router;
};
