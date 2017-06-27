exports.up = function(knex, Promise) {
  return knex.schema.createTable('groups', tbl => {
    tbl.increments()
    tbl.integer('owner_id').notNullable().references('users.fbid').onDelete('CASCADE')
    tbl.integer('word_limit').defaultTo(12)
    tbl.string('name').notNullable()
    tbl.boolean('profanity').defaultTo(false)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('groups')
};
