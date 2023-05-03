import styles from './todoItem.module.css'
export const TodoItem = ({todo, index, deleteOneTodo, updTodoStatus}) => {
    return (<li className={`list-group-item d-flex ${styles.wrapper1}`}> 
    {`${index+1}. `}  
    <span className={todo.status ? 'text-decoration-line-through' : '' } >
    {todo.title} 
    </span>
    <div className={`${styles.wrapper3}`}>
    <button 
    type="submit" 
    className='btn btn-danger'
    onClick={() => deleteOneTodo(todo.id)}>
      Удалить 
    </button>
  
    <button 
    type="submit" 
    className='btn btn-warning mx-3'
    onClick={() => updTodoStatus(todo.id)}>
      Изменить
    </button>
    </div>
    
    </li>
    )
  }