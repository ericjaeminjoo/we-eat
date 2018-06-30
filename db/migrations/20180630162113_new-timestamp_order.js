exports.up = function(knex, Promise) {
  return knex.schema.table('order', table =>  {
    table.timestamp('time_stamp').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table("order", table => {
    table.dropColumn('time_stamp');
  });
};
