exports.up = function(knex, Promise) {
  return knex.schema.table('order', table =>  {
    table.dropColumn('time_stamp');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table("order", table => {
    table.string('time_stamp');
  });
};
