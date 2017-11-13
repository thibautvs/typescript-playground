import * as React from 'react'
import { Component } from 'react'
import { TodoItemProps } from './interfaces'

class TodoItem extends Component<TodoItemProps, {}> {
  render() {
    const { id, title, completed } = this.props.todo
    return (
      <li>
        <input type="checkbox" checked={completed} onClick={() => this.props.onToggleClick(id)} />
        <span>{title}</span>
        <input type="button" value="X" onClick={() => this.props.onDeleteClick(id)} />
      </li>
    )
  }
}

export default TodoItem
