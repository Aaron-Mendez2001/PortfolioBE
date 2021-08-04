
exports.seed = async function(knex) {
  await knex('skills').truncate()
  await knex('experience').truncate()
};
