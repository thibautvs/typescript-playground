/// <reference path="./interfaces.d.ts"/>

import * as React from 'react'
import { Component } from 'react'

class TodoItem extends Component<TodoItemProps, {}> {
  render() {
    return <li>{this.props.todo.title}</li>
  }
}

export default TodoItem
