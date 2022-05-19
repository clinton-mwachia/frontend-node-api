import React from 'react'
import {Link} from 'react-router-dom'

const Todo = () => {
  return (
    <div>
        <h4>Todo</h4>
        <Link to="/todos">Back To Todos</Link>
    </div>
  )
}

export default Todo