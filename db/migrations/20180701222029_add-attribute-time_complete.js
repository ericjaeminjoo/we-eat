exports.up = function(knex, Promise) {
  return knex.schema.table('orders', table =>  {
    table.dateTime('time_complete');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table("orders", table => {
    table.dropColumn('time_complete');
  });
};
