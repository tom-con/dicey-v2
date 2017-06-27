exports.up = function(knex, Promise) {
  return knex.schema.createTable('sentences', tbl => {
    tbl.increments()
    tbl.integer('group_id').notNullable().references('groups.id').onDelete('CASCADE')
    tbl.boolean('completed').defaultTo(false)
    tbl.text('current_turn')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('sentences')
};
