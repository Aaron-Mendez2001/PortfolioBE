
exports.up = async function(knex) {
    await knex.schema.createTable('skills', (table) => {
        table.increments('id')
        table.text('name')
        table.text('education')
        table.text('description')
    })

    await knex.schema.createTable('experience', (table) => {
        table.increments('id')
        table.text('name')
        table.text('url')
        table.text('description')
        table.text('skills_1')
            .references('id')
            .inTable('skills')
            .onDelete('SET NULL')
            .onUpdate('CASCADE')
        table.text('skills_2')
            .references('id')
            .inTable('skills')
            .onDelete('SET NULL')
            .onUpdate('CASCADE')
        table.text('skills_3')
            .references('id')
            .inTable('skills')
            .onDelete('SET NULL')
            .onUpdate('CASCADE')
  })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('skills')
    await knex.schema.dropTableIfExists('experience')
};
