const router = require('express').Router()
const httpToDos = require('./to-do.http')

router.route('/')
    .get(httpToDos.getAll)
    .post(httpToDos.createToDo)

router.route('/:id')
    .get(httpToDos.getById)
    .put(httpToDos.updateById)
    .delete(httpToDos.deleteById)

module.exports = {
    router
}