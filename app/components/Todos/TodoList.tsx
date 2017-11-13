/// <reference path="./interfaces.d.ts" />

import * as React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import TodoItem from './TodoItem'

interface Props {
  items: Todo[]
}

class TodoList extends Component<Props, {}> {
  render() {
    return (
      <article>
        <ul>
          {this.props.items.map(item => (
            <TodoItem key={item.id} todo={item} />
          ))}
        </ul>
      </article>
    )
  }
}

const mapStateToProps = (state: Todo[]) => ({
  items: state
})

export default connect(mapStateToProps)(TodoList)
