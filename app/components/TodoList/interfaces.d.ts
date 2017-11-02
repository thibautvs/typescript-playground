interface ITodo {
  id: number
  title: string
  completed: boolean
}

interface ITodoItemProps {
  todo: ITodo
}

interface ITodoListProps {
  items: ITodo[]
}

interface ITodoItemState {
  editText: string
}
