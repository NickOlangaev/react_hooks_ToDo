import React, { useState } from 'react';
import ToDoFormStyles from './ToDoForm.module.css';

function ToDoForm({ addTask }) {
    const [userInput, setUserInput] = useState('')

    const formSubmit = (e) => {
        e.preventDefault();
        addTask(userInput);
        setUserInput('');
    }

    return (
            <form className={ToDoFormStyles.todoForm} onSubmit={formSubmit}>
                <input
                    className={ToDoFormStyles.formInput}
                    type="text"
                    maxLength = '30'
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}/>
                <button className={ToDoFormStyles.formButton}>Add</button>
            </form>
    )
}

export default ToDoForm
