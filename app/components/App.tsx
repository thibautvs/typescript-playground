/// <reference path="./TodoList/interfaces.d.ts"/>

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Hello from './Hello'
import TodoList from './TodoList/TodoList'

const todoItems: ITodo[] = [
  { id: 1, title: 'Read TypeScript docs', completed: true },
  { id: 2, title: 'Try TypeScript with React/Redux', completed: true }
]

ReactDOM.render(
  <div>
    <Hello name="Thibaut" />
    <TodoList items={todoItems} />
  </div>,
  document.getElementById('root')
)
