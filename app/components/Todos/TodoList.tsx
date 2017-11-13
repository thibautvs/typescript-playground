import * as React from 'react'
import { Component } from 'react'
import TodoItem from './TodoItem'
import { TodoListProps } from './interfaces'

class TodoList extends Component<TodoListProps, {}> {
  render() {
    return <article>
        <ul>
          {this.props.items.map(item => 
            <TodoItem
              key={item.id}
              todo={item}
              onToggleClick={this.props.onToggleClick}
              onDeleteClick={this.props.onDeleteClick}
            />
          )}
        </ul>
      </article>
  }
}

export default TodoList
