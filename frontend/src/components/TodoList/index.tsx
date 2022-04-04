/* eslint-disable no-use-before-define */
import React from 'react'
import { TodoUl } from './styles'

const TodoList = () => {
  return (
    <>
    <TodoUl>
      <li>
        <div>
          <input type="checkbox" />
          <label htmlFor="">item1</label>
        </div>
        <button type='button'>X</button>
      </li>
    </TodoUl>
    </>
  )
}

export default TodoList
