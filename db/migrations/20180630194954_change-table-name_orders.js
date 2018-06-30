exports.up = function(knex, Promise) {
  return knex.schema.renameTable('order', 'orders');
};

exports.down = function(knex, Promise) {
  return knex.schema.renameTable('orders', 'order');
};
