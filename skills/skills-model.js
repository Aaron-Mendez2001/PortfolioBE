const db = require('../data/config');

function getSkills(){
    return db('skills').select('*');
}

function getSkillsById(id){
    return db('skills').where('id', id).first();
}

function getSkillsBy(filter){
    return db('skills').where(filter).first();
}

module.exports = {
    getSkills,
    getSkillsBy,
    getSkillsById
}