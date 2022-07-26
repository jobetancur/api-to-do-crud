const toDoDB = [
    {
        id: 1,
        name: "Tarea 1",
        task: "Prueba de tarea 1",
        status: "Not completed"
    }
]

const getAllToDos = () => {
    return toDoDB
}

const getToDoById = (id) => {
    const filteredDB = toDoDB.filter((toDo) => toDo.id === id)
    return filteredDB[0]
}

const createNewToDo = (toDoObj) => {
    if(toDoDB.length === 0){
        const newToDo = {
            id: 1,
            name: toDoObj.name,
            task: toDoObj.task,
            status: toDoObj.status
        }
        toDoDB.push(newToDo)
        return newToDo
    }
    const newToDo = {
        id: toDoDB[toDoDB.length - 1].id + 1,
        name: toDoObj.name,
        task: toDoObj.task,
        status: toDoObj.status
    }
    toDoDB.push(newToDo)
    return newToDo
}

// Delete
const deleteToDo = (id) => {
    const index = toDoDB.findIndex(item => item.id === id)
    if (index !== - 1) {
        toDoDB.splice(index, 1)
        return true
    } else {
        return false
    }
}

// Update
const updateToDo = (id, data) => {
    const index = toDoDB.findIndex((item) => item.id === id)
    if(index !== -1){
        toDoDB[index] = data
        return toDoDB[index]
    } else {
        createNewToDo(data)
        return toDoDB.at(-1)
    }
}

module.exports = {
    getAllToDos,
    getToDoById,
    createNewToDo,
    deleteToDo,
    updateToDo
}