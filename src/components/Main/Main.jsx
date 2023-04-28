import styles from './main.module.css'
const Main = ({todos, deleteList, deleteOneTodo}) => {
   if (!todos.length) {
    return  <p className='m-3'>TODO пока пуст....</p>
   }
    return (
        
      
      <main className={`mt-3 ${styles.wrapper}`} > 
      <ul className='mt-3 list-group'>
      {todos.map((todo, index)=>{
        return <li className={`list-group-item ${styles.wrapper1}`} key={todo.id}> 
      {`${index+1}.  `}  
      <span>
      {todo.title} 
      </span>
      <div><button 
      type="submit" 
      className='btn btn-danger'
      onClick={() => deleteOneTodo(todo.id)}>
        Удалить 
      </button>

      <button 
      type="submit" 
      className='btn btn-warning mx-3'
      onClick={() => console.log('IZMENA')}>
        Изменить
      </button>
      </div>
      
      </li>
      })}
      </ul>

      <button 
      type="submit" 
      className="btn btn-danger m-3"
      onClick={deleteList}>
      
        Удалить все
      </button>
      
      </main>
   
        
    )
}

export default Main