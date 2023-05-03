import { TodoItem } from "../TodoItem/TodoItem"

export const Todo =({todos, deleteOneTodo, updTodoStatus}) => {
    return (   
     <ul className='mt-3 list-group'>
    {todos.map((todo, index)=>{
      return <TodoItem
      key={todo.id}
      todo={todo}
      index={index}
      deleteOneTodo={deleteOneTodo}
      updTodoStatus={updTodoStatus}
      />
    })}
    </ul>
    )
  }