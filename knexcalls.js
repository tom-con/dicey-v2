// when a user logs in we need to check permissions

knex('users')
  .where('fbid', userId)
  .where('permissions', true)
  .first()
  .then(user => {
    res.send(user)
  })

// insert a new user

knex('users')
  .insert(userInfo, '*')
  .then(user => {
    res.send(user)
  })

// get all groups or a specific number of groups

knex('groups')
  .join('users_groups', 'users_groups.group_id', 'groups.id')
  .join('users', 'users_groups.user_id', 'users.fbid')
  .where('users.fbid', id)
  .limit(limit ? limit : 100)
  .then(groups => {
    res.send(groups)
  })


// get current sentence for a group
if(we want only current sentence){

knex('sentences')
  .join('groups', 'sentences.group_id', 'groups.id')
  .where('sentences.group_id', 'groups.id')
  .where('sentences.completed', false)
  .first()
  .then(sentence => {
    res.send(sentence)
  })
} else {
// get all sentences for a group_id

knex('sentences')
  .join('groups', 'sentences.group_id', 'groups.id')
  .where('sentences.group_id', 'groups.id')
  .first()
  .then(sentence => {
    res.send(sentence)
  })
}


// displaying a sentence on the sentence's page

knex('sentences')
  .join('words_sentences', 'sentences.id', 'words_sentences.sentence_id')
  .join('words', 'words.id', 'words_sentences.word_id')
  .join('users', 'users.fbid', 'words_sentences.owner_id')
  .where('sentences.id', id)
  .orderBy('words_sentences.position')
  .then(words => {
    res.send(words)
  })

// display 10 most recent words inserted all groups (newsfeed)

knex('users_groups')
  .join('groups', 'groups.id', 'users_groups.group_id')
  .join('sentences', 'sentences.group_id', 'groups.id')
  .join('words_sentences', 'sentences.id', 'words_sentences.sentence_id')
  .join('words', 'words_sentences.word_id', 'words.id')
  .join('users', 'words_sentences.owner_id', 'users.fbid')
  .where('users_groups.user_id', id)
  .returning('users.name as user_name', 'words.text as text', 'words_sentences.created_at as created_at', 'groups.name as group_name', 'users.prof_picture as prof_picture')
  .orderBy('words_sentences.created_at', 'DESC')
  .limit(10)
  .then(activities => {
    res.send(activities)
  })
