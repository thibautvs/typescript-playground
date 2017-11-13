/// <reference path="./interfaces.d.ts" />

import * as React from 'react'
import { Component } from 'react'
import { ToggleTodoAction, DeleteTodoAction } from './actionTypes'

interface Props {
  todo: Todo
  onToggleClick(id: number): ToggleTodoAction
  onDeleteClick(id: number): DeleteTodoAction
}

class TodoItem extends Component<Props, {}> {
  render() {
    const { id, title, completed } = this.props.todo
    return (
      <li>
        <input
          type="checkbox"
          checked={completed}
          onClick={() => this.props.onToggleClick(id)}
        />
        <span>{title}</span>
        <input
          type="button"
          value="X"
          onClick={() => this.props.onDeleteClick(id)}
        />
      </li>
    )
  }
}

export default TodoItem
