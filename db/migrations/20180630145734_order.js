
exports.up = function(knex, Promise) {
  return knex.schema.table('order', table =>  {
    table.dropColumn("time_pickup");
    table.decimal('service_fee', 5, 2);
    table.decimal('sub_total', 5, 2);
    table.decimal('total', 5, 2);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table("order", table => {
    table.string('time_pickup');
    table.dropColumn("service_fee");
    table.dropColumn("sub_total");
    table.dropColumn("total");
  });
};
