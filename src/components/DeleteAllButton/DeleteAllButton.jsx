import styles from './DeleteAllButton.module.css'
export const DeleteAllButton = ({deleteList}) => {
    return (<div className='d-flex'><button 
    type="submit" 
    className={`btn btn-danger mt-3 ${styles.wrapper4}`}
    onClick={deleteList}>
    
      Удалить все
    </button></div>)
  }