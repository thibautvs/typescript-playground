import { ActionTypes, AddTodoAction, ToggleTodoAction, DeleteTodoAction } from './actionTypes'

export const addTodo = (title: string): AddTodoAction => ({
  type: ActionTypes.ADD_TODO,
  title
})
export const toggleTodo = (id: number): ToggleTodoAction => ({
  type: ActionTypes.TOGGLE_TODO,
  id
})
export const deleteTodo = (id: number): DeleteTodoAction => ({
  type: ActionTypes.DELETE_TODO,
  id
})
