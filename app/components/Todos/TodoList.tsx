/// <reference path="./interfaces.d.ts" />

import * as React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import TodoItem from './TodoItem'
import { ToggleTodoAction, DeleteTodoAction } from './actionTypes'
import { toggleTodo, deleteTodo } from './actionCreators'

interface Props {
  items: Todo[]
  onToggleClick(id: number): ToggleTodoAction
  onDeleteClick(id: number): DeleteTodoAction
}

class TodoList extends Component<Props, {}> {
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

const mapStateToProps = (state: Todo[]) => ({
  items: state
})

export default connect(
  mapStateToProps,
  {
    onToggleClick: toggleTodo,
    onDeleteClick: deleteTodo
  }
)(TodoList)
