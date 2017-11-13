import * as React from 'react'
import { Component } from 'react'
import { connect, Dispatch } from 'react-redux'
import { Action } from './actionTypes'
import { addTodo } from './actionCreators'

interface Props {
  dispatch: Dispatch<Action>
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
    e.preventDefault()
    this.props.dispatch(addTodo(this.state.title))
    this.setState({ title: '' })
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

export default connect()(AddTodo)
