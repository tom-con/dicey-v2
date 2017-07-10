exports.up = function(knex, Promise) {
  return knex.schema.createTable('words_sentences', tbl => {
    tbl.increments()
    tbl.integer('word_id').notNullable().references('words.id').onDelete('CASCADE')
    tbl.integer('sentence_id').notNullable().references('sentences.id').onDelete('CASCADE')
    tbl.integer('owner_id').notNullable().references('users.fbid').onDelete('CASCADE')
    tbl.integer('position').notNullable()
    tbl.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('words_sentences')
};
