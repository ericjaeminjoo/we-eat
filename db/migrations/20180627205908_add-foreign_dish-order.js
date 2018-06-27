
exports.up = function(knex, Promise) {
  return knex.schema.table('dish_order', table =>  {
    table
      .foreign('dish_id')
      .references('id')
      .on('dish')
      .onDelete('CASCADE')
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('dish_order', table =>  {
    table.dropColumn('dish_id');
  });
};
