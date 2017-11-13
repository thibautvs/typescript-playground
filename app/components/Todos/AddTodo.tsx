import * as React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux';
import { AddTodoAction } from './actionTypes'
import { addTodo } from './actionCreators'

interface Props {
  onAddClick(title: string): AddTodoAction
}

interface State {
  title: string
}

class AddTodo extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { title: '' }
  }

  handleTitleChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ title: e.target.value })
  }

  handleSubmit(e: React.ChangeEvent<HTMLFormElement>) {
    this.props.onAddClick(this.state.title)
    this.setState({ title: '' })
    e.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input
          name="title"
          value={this.state.title}
          onChange={this.handleTitleChange.bind(this)}
        />
        <input type="submit" value="Add" />
      </form>
    )
  }
}

export default connect(null, { onAddClick: addTodo })(AddTodo)
