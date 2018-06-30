exports.up = function(knex, Promise) {
  return knex.schema.table('dish_order', table =>  {
    table.integer('line_total');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table("dish_order", table => {
    table.dropColumn("line_total");
  });
};
