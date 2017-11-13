/// <reference path="./interfaces.d.ts"/>

import { connect } from 'react-redux'
import TodoList from './TodoList'

const mapStateToProps = (state: Todo[]) => ({
  items: state
});

const VisibleTodoList = connect(mapStateToProps, {})(TodoList)

export default VisibleTodoList
