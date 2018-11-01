
exports.up = function(knex, Promise) {
    return knex.schema
    .createTable('phones',(table)=>{
      table.increments('id').primary().notNullable();
      table.string('phoneNumber');
      table.integer("user_id").index().notNull;

      table.foreign('user_id').references('id').inTable('users')
      table.unique('user_id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema
  .dropTableIfExists('phones')
};
