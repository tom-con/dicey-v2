exports.up = function(knex, Promise) {
  return knex.schema.createTable('sentences', tbl => {
    tbl.increments()
    tbl.integer('group_id').notNullable().references('groups.id').onDelete('CASCADE')
    tbl.boolean('completed').defaultTo(false)
    tbl.integer('winner').references('users.fbid')
    tbl.text('post_url')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('sentences')
};
