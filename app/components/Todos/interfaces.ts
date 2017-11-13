import { ToggleTodoAction, DeleteTodoAction } from './actionTypes'

export interface Todo {
  id: number
  title: string
  completed: boolean
}

export interface TodoItemProps {
  todo: Todo
  onToggleClick(id: number): ToggleTodoAction
  onDeleteClick(id: number): DeleteTodoAction
}

export interface TodoListProps {
  items: Todo[]
  onToggleClick(id: number): ToggleTodoAction
  onDeleteClick(id: number): DeleteTodoAction
}
