exports.up = function(knex) {
    return knex.schema
      .createTable('users', function(table) {
        table.increments('id').primary();
        table.string('email').unique().notNullable();
        table.string('password').notNullable();
        table.string('first_name').notNullable();
        table.string('last_name').notNullable();
        table.timestamps(true, true);
      })
      .createTable('verification_requests', function(table) {
        table.increments('id').primary();
        table.integer('user_id').unsigned().notNullable().references('id').inTable('users').onDelete('CASCADE');
        table.string('type').notNullable();  // e.g., KYC, access control
        table.string('status').notNullable().defaultTo('pending');  // e.g., pending, verified, rejected
        table.text('metadata');  // Store any additional data related to the request
        table.timestamps(true, true);
      })
      .createTable('identities', function(table) {
        table.increments('id').primary();
        table.integer('user_id').unsigned().notNullable().references('id').inTable('users').onDelete('CASCADE');
        table.string('identity_hash').notNullable();  // Store a hash reference of the identity data
        table.timestamps(true, true);
      });
  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropTable('identities')
      .dropTable('verification_requests')
      .dropTable('users');
  };
  