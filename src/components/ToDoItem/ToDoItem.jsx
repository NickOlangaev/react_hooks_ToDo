import React from 'react'
import ToDoItemStyles from './ToDoItem.module.css'

function ToDoItem({ todo, removeTask, taskToogleDone }) {
    const doneStyle = (`${ToDoItemStyles.todoItemWrapper} ${ToDoItemStyles.todoDone}`)
    const deleteTask = (id, e) => {
        e.stopPropagation()
        removeTask(id)
    }
    return (
        <div
            className={todo.isDone ? doneStyle : ToDoItemStyles.todoItemWrapper}
            onClick={() => taskToogleDone(todo.id)}
        >
            <div className={ToDoItemStyles.task} >
                {todo.body}
            </div>
            <div
                className={ToDoItemStyles.deleteIcon}
                onClick={(e) => deleteTask(todo.id, e)}>X</div>
        </div>
    )
}

export default ToDoItem
