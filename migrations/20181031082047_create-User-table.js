
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable('users',(table)=>{
      table.increments('id').primary().notNullable();
      table.string('name');
  
    })
};

exports.down = function(knex, Promise) {
  return knex.schema
  .dropTableIfExists('users')
};
