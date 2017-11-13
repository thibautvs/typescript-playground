interface Todo {
  id: number
  title: string
  completed: boolean
}

interface TodoItemProps {
  todo: Todo
}

interface TodoListProps {
  items: Todo[]
}
