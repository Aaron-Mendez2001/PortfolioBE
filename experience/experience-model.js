const db = require('../data/config');

function getExp(){
    return db('experience').select('*');
}

function getExpById(id){
    return db('experience').where('id', id).first();
}

function getExpBy(filter){
    return db('experience').where(filter).first();
}

module.exports = {
    getExp,
    getExpBy,
    getExpById
}