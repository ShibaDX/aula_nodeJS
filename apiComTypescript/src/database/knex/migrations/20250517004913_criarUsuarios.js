/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('usuarios', (table) => {
    table.increments('id')
    table.text('nome').notNullable()
    table.text('email').notNullable() // not null
    table.text('senha').notNullable()
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
  }).then(() => {
    console.log('Criado a tabela Usuarios')
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
      return knex.schema.dropTable('usuarios').then(() => {
        console.log('Deletado a tabela Usuarios')
    })
};
