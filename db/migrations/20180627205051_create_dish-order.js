
exports.up = function(knex, Promise) {
  return knex.schema.createTable('dish_order', table =>  {
    table.increments();
    table.integer('qty'),
    table.string('special_inst');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('dish_order');
};
