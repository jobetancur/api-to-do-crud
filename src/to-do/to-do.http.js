const { getAllToDos, getToDoById, createNewToDo, deleteToDo, updateToDo } = require('./to-do.controllers')

const getAll = (req, res) => {
    const data = getAllToDos()
    res.status(200).json({
        items: data.length,
        response: data
    })
}

const getById = (req, res) => {
    const id = Number(req.params.id)
    if(id){
        const data = getToDoById(id)
        if(data.id){
            res.status(200).json(data)
        } else {
            res.status(400).json({message: 'Invalid ID'})
        }
    } else {
        res.status(400).json({message: 'ID is not a number'})
    }
}

const createToDo = (req, res) => {
    const data = req.body
    if(data.name && data.task && data.status){
        const response = createNewToDo(data)
        res.status(201).json({message: 'Task created successfully'})
    } else {
        res.status(400).json({message: 'Invalid arguments'})
    }
}

const deleteById = (req, res) => {
    const id = Number(req.params.id)
    if(typeof id === 'number'){
        const deleted = deleteToDo(id)
        if(deleted){
            res.status(204).json({message: 'Task successfully eliminated'})
        } else {
            res.status(400).json({message: 'Try with another ID'})
        }
    } else {
        res.status(400).json({message: 'Invalid ID'})
    }
}

const updateById = (req, res) => {
    const id = Number(req.params.id)
    const data = req.body
    if(data.name && data.task && data.status){
        const response = updateToDo(id, data)
        res.status(201).json({message: 'Task successfully edited'})
    } else {
        res.status(400).json({message: 'Invalid arguments'})
    }
}

module.exports = {
    getAll,
    getById,
    createToDo,
    deleteById,
    updateById
}