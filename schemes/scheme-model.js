const db = require('../data/connection')

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove

    // addStep,
}

function find() {
    return db('schemes')
}

function findById(id) {
    return db('schemes').where({ id }).first();
}

function findSteps(id) {
    return db('steps').where({ scheme_id: id })
}

function add(user) {
    return db('schemes').insert(user, 'id')
}

function update(changes, id) {
    return db('schemes').where({ id }).update(changes)
}

function remove(id) {
    return db('schemes').where({ id }).del();
}

