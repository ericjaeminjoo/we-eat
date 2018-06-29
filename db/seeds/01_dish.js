
const faker = require("faker");

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return Promise.all([
    knex.raw("ALTER SEQUENCE dish_id_seq RESTART WITH 1"),
    knex("dish")
      .del()
      .then(function() {
        // Inserts seed entries
        return knex("dish").insert([
          {
            name: 'Mini Soup',
            description: 'Your choice of protein and flavour.',
            price: faker.commerce.price(1.00, 15.00),
            image_url: faker.image.food(),
            category: 'appetizers'
          },
          {
            name: 'Vegetable Spring Roll',
            description: '1 piece.',
            price: faker.commerce.price(1.00, 15.00),
            image_url: faker.image.food(),
            category: 'appetizers'
          },
          {
            name: 'Gyoza',
            description: 'Chicken Dumplings, 3 pieces.',
            price: faker.commerce.price(1.00, 15.00),
            image_url: faker.image.food(),
            category: 'appetizers'
          },
          {
            name: 'Tofu',
            description: 'Your choice of fried or cold.',
            price: faker.commerce.price(1.00, 15.00),
            image_url: faker.image.food(),
            category: 'appetizers'
          },
          {
            name: 'Seafood Ramen Soup',
            description: 'With noodles, eggs and vegetables.',
            price: faker.commerce.price(1.00, 15.00),
            image_url: faker.image.food(),
            category: 'soups'
          },
          {
            name: 'Beef Ramen Soup',
            description: 'With noodles, eggs and vegetables.',
            price: faker.commerce.price(1.00, 15.00),
            image_url: faker.image.food(),
            category: 'soups'
          },
          {
            name: 'Shrimp Ramen Soup',
            description: 'With noodles, eggs and vegetables.',
            price: faker.commerce.price(1.00, 15.00),
            image_url: faker.image.food(),
            category: 'soups'
          },
          {
            name: 'Seafood Ramen Soup',
            description: 'With noodles, eggs and vegetables.',
            price: faker.commerce.price(1.00, 15.00),
            image_url: faker.image.food(),
            category: 'soups'
          },
          {
            name: 'Vegetarian Ramen Soup',
            description: 'With noodles, eggs and vegetables.',
            price: faker.commerce.price(1.00, 15.00),
            image_url: faker.image.food(),
            category: 'soups'
          },
          {
            name: 'Chicken Teriyaki',
            description: 'With steamed rice and vegetables.',
            price: faker.commerce.price(1.00, 15.00),
            image_url: faker.image.food(),
            category: 'teriyaki'
          },
          {
            name: 'Beef Teriyaki',
            description: 'With steamed rice and vegetables.',
            price: faker.commerce.price(1.00, 15.00),
            image_url: faker.image.food(),
            category: 'teriyaki'
          },
          {
            name: 'Shrimp Teriyaki',
            description: 'With steamed rice and vegetables.',
            price: faker.commerce.price(1.00, 15.00),
            image_url: faker.image.food(),
            category: 'teriyaki'
          },
          {
            name: 'Salmon Teriyaki',
            description: 'With steamed rice and vegetables.',
            price: faker.commerce.price(1.00, 15.00),
            image_url: faker.image.food(),
            category: 'teriyaki'
          },
          {
            name: 'Tofu Teriyaki',
            description: 'With steamed rice and vegetables.',
            price: faker.commerce.price(1.00, 15.00),
            image_url: faker.image.food(),
            category: 'teriyaki'
          },
          {
            name: 'Pineapple Chicken Teriyaki',
            description: 'With steamed rice and vegetables.',
            price: faker.commerce.price(1.00, 15.00),
            image_url: faker.image.food(),
            category: 'teriyaki'
          },
          {
            name: 'Vegetarian Teriyaki',
            description: 'With steamed rice and vegetables.',
            price: faker.commerce.price(1.00, 15.00),
            image_url: faker.image.food(),
            category: 'teriyaki'
          }
        ]);
      })
  ]);
};
