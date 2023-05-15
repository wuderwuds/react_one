import { useContext } from 'react'
import styles from './DeleteAllButton.module.css'
import { ContextFun } from '../../context/todosContext'
export const DeleteAllButton = () => {
    const {deleteList} = useContext(ContextFun)
    return (<div className='d-flex'><button 
    type="submit" 
    className={`btn btn-danger mt-3 ${styles.wrapper4}`}
    onClick={deleteList}>
    
      Удалить все
    </button></div>)
  }