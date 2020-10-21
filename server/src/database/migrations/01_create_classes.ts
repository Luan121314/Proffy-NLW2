import knex from 'knex'


export async function up(knex: knex) {
    return knex.schema.createTable('classes', (table) => {
        table.increments('id').primary();
        table.string('subject').notNullable();
        table.decimal('cost').notNullable();
        table.integer('user_id')
            .references("id")
            .inTable('users')
            .notNullable()
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    })
}


export async function down(knex: knex) {
    return knex.schema.dropTable('classes');
}