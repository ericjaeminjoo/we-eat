
const faker = require("faker");

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return Promise.all([
    knex.raw("ALTER SEQUENCE order_id_seq RESTART WITH 1"),
    knex("order")
      .del()

  ]);
};
