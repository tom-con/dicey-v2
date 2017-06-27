exports.up = function(knex, Promise) {
  return knex.schema.createTable('users_groups', tbl => {
    tbl.increments()
    tbl.integer('user_id').notNullable().references('users.fbid').onDelete('CASCADE')
    tbl.integer('group_id').notNullable().references('groups.id').onDelete('CASCADE')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users_groups')
};
