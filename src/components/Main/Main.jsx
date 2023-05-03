import { DeleteAllButton } from '../DeleteAllButton/DeleteAllButton'
import { Todo } from '../TodoList/TodoList'
import styles from './main.module.css'






export const Main = ({todos, deleteList, deleteOneTodo, updTodoStatus}) => {
   if (!todos.length) {
    return  <p className='m-3'>TODO пока пуст....</p>
   }
    return (
        
      
      <main className={`m-3  ${styles.wrapper}`} > 
      <Todo  todos={todos} 
      deleteOneTodo={deleteOneTodo}
      updTodoStatus={updTodoStatus}/>

      <DeleteAllButton deleteList={deleteList}/>
      
      </main>
   
        
    )
}
