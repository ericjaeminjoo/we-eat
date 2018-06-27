
exports.up = function(knex, Promise) {
  return knex.schema.createTable('order', function (table) {
    table.increments(),
    table.string('phone'),
    table.string('time_stamp'),
    table.string('time_pickup')
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('order');
};
