exports.up = function(knex, Promise) {
  return knex.schema.createTable('words_sentenes', tbl => {
    tbl.increments()
    tbl.integer('word_id').notNullable().references('words.id').onDelete('CASCADE')
    tbl.integer('sentence_id').notNullable().references('sentences.id').onDelete('CASCADE')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('words_sentenes')
};
