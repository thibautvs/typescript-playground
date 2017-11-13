/// <reference path="./Todos/interfaces.d.ts"/>

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import VisibleTodoList from './Todos/VisibleTodoList'
import todosReducer from './Todos/reducer'

const store = createStore(todosReducer)

ReactDOM.render(
  <Provider store={store}>
    <VisibleTodoList />
  </Provider>,
  document.getElementById('root')
)
