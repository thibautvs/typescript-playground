enum ActionTypes {
  ADD_TODO = 'ADD_TODO',
  TOGGLE_TODO = 'TOGGLE_TODO',
  DELETE_TODO = 'DELETE_TODO',
  OTHER_ACTION = '__any_other_action_type__'
}

export { ActionTypes }

export interface AddTodoAction {
  type: ActionTypes.ADD_TODO,
  title: string
}

export interface ToggleTodoAction {
  type: ActionTypes.TOGGLE_TODO,
  id: number
}

export interface DeleteTodoAction {
  type: ActionTypes.DELETE_TODO,
  id: number
}

export interface OtherAction {
  type: ActionTypes.OTHER_ACTION
}

export type Action =
  | AddTodoAction
  | ToggleTodoAction
  | DeleteTodoAction
  | OtherAction
