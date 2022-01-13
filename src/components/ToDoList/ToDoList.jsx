import React from 'react'
import ToDoItem from '../ToDoItem/ToDoItem'
import ToDoListStyles from './ToDoList.module.css'

function ToDoList({ todoData, removeTask, taskToogleDone }) {
    return (
        <div className={ToDoListStyles.todoList}>
            {todoData.length
                ?
                todoData.map(
                    (item) => <ToDoItem
                        taskToogleDone={taskToogleDone}
                        key={item.id}
                        todo={item}
                        removeTask={removeTask} />
                )
                :
                <h3 className={ToDoListStyles.noTasksMessage}>No Tasks</h3>}
        </div>
    )
}

export default ToDoList
