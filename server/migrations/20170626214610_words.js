exports.up = function(knex, Promise) {
  return knex.schema.createTable('words', tbl => {
    tbl.increments()
    tbl.string('text').notNullable().unique()
    tbl.boolean('profane').defaultTo(false)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('words')
};
