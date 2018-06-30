exports.up = function(knex, Promise) {
  return knex.schema.table('dish_order', table =>  {
    table.decimal('line_total', 5, 2);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table("dish_order", table => {
    table.dropColumn("line_total");
  });
};
