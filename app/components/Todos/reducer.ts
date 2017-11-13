import { Todo } from './interfaces'
import { Action, ActionTypes } from './actionTypes'

type State = Todo[]
const initialState: State = []
let id = 1

function todosReducer(state: State = initialState, action: Action) {
  switch (action.type) {
    case ActionTypes.ADD_TODO:
      return [
        ...state,
        {
          id: id++,
          title: action.title,
          completed: false
        }
      ]
    case ActionTypes.TOGGLE_TODO:
      return state.map(todo => {
        return todo.id !== action.id
          ? todo
          : Object.assign({}, todo, { completed: !todo.completed })
      })
    case ActionTypes.DELETE_TODO:
      return state.filter(todo => todo.id !== action.id)
    default:
      return state
  }
}

export default todosReducer
