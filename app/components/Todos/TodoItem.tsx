/// <reference path="./interfaces.d.ts" />

import * as React from 'react'
import { Component } from 'react'
import { connect, Dispatch } from 'react-redux'
import { Action } from './actionTypes'
import { toggleTodo, deleteTodo } from './actionCreators'

interface Props {
  todo: Todo
  dispatch: Dispatch<Action>
}

class TodoItem extends Component<Props, {}> {
  render() {
    const { id, title, completed } = this.props.todo
    return (
      <li>
        <input
          type="checkbox"
          checked={completed}
          onClick={() => this.props.dispatch(toggleTodo(id))}
        />
        <span>{title}</span>
        <input
          type="button"
          value="X"
          onClick={() => this.props.dispatch(deleteTodo(id))}
        />
      </li>
    )
  }
}

export default connect()(TodoItem)
