
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', tbl => {
    tbl.integer('fbid').primary().notNullable()
    tbl.string('name').notNullable()
    tbl.text('prof_picture')
    tbl.boolean('permissions').defaultTo(false)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
};
