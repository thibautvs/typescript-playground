import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import VisibleTodoList from './Todos/VisibleTodoList'
import todosReducer from './Todos/reducer'

const store = createStore(
  todosReducer,
  applyMiddleware(logger)
)

ReactDOM.render(
  <Provider store={store}>
    <VisibleTodoList />
  </Provider>,
  document.getElementById('root')
)
