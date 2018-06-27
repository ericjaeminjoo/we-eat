
exports.up = function(knex, Promise) {
  return knex.schema.table('dish', table =>  {
    table.string('category');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table("dish", table => {
    table.dropColumn("category");
  });
};
