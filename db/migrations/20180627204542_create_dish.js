
exports.up = function(knex, Promise) {
  return knex.schema.createTable('dish', function (table) {
    table.increments(),
    table.string('name'),
    table.string('description'),
    table.decimal('price', 5, 2),
    table.string('image_url')
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('dish');
};
