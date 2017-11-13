import { connect } from 'react-redux'
import TodoList from './TodoList'
import { toggleTodo, deleteTodo } from './actionCreators'
import { Todo } from './interfaces'

const mapStateToProps = (state: Todo[]) => ({
  items: state
})

const VisibleTodoList = connect(
  mapStateToProps,
  {
    onToggleClick: toggleTodo,
    onDeleteClick: deleteTodo
  }
)(TodoList)

export default VisibleTodoList
