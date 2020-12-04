
exports.up = function(knex) {
  return knex.schema.createTable('users', function (table){
    table.increments('id');
    table.string('nome').notNullable();
    table.string('email').notNullable();
    table.unique('email');
    table.timestamps();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
