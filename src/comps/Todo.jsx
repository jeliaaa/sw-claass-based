import React from 'react'

const Todo = ({ todo, complete, completed, removeCompleted }) => {
    return (
        <div className='todo_card'>
            <p>{todo}</p>
            {completed ? <button onClick={() => removeCompleted()}>Remove</button> : <button type='button' onClick={() => complete()}>Complete</button>}

        </div>
    )
}

export default Todo