import React, { Component, PureComponent } from 'react'

class Todo extends PureComponent{
    render() {

        const { todo, complete, completed, removeCompleted } = this.props; 
        return (
            <div className='todo_card'>
                <p>{todo}</p>
                {completed ? <button onClick={() => removeCompleted()}>Remove</button> : <button type='button' onClick={() => complete()}>Complete</button>}
            </div>
        )
    }
}

export default Todo