
exports.up = function(knex, Promise) {
  return knex.schema.table('dish_order', table =>  {
    table
      .foreign('order_id')
      .references('id')
      .on('order')
      .onDelete('CASCADE')
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('dish_order', table =>  {
    table.dropColumn('order_id');
  });
};
