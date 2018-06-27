
exports.up = function(knex, Promise) {
  return knex.schema.table('dish_order', table =>  {
    table.integer('dish_id'),
    table.integer('order_id')
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('dish_order', table =>  {
    table.dropColumn('dish_id');
    table.dropColumn('order_id');
  });
};
