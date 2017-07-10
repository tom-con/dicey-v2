

exports.up = function(knex, Promise) {
  return knex.schema.createTable('turns', tbl => {
    tbl.increments()
    tbl.integer('user_id').notNullable().references('users.fbid').onDelete('CASCADE')
    tbl.integer('sentence_id').notNullable().references('sentences.id').onDelete('CASCADE')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('turns')
};
