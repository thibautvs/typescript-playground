/// <reference path="./interfaces.d.ts"/>

import * as React from 'react'
import { Component } from 'react'
import TodoItem from './TodoItem'

class TodoList extends Component<ITodoListProps, {}> {
  render() {
    return (
      <article>
        <ul>
          {this.props.items.map(item =>
            <TodoItem key={item.id} todo={item} />
          )}
        </ul>
      </article>
    )
  }
}

export default TodoList
