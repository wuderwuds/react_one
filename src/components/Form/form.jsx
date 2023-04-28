import { useState } from "react"


export const Form = ({addToList}) => {
   
    const [value, setValue] = useState("")
   
    const hundleSubmit = (event) => {
        event.preventDefault()
        // if (!value) return;
        addToList(value)
        return setValue('')
    }
    
      
    return (        
    <form onSubmit={(event)=>hundleSubmit(event)} className="d-flex flex-column align-items-center mt-3">
        <div className="mb-3">
          
          <input 
           placeholder="задача"
           value={value}
           onChange={(event)=>setValue(event.target.value)}
           type="text" 
           className="form-control"
           required
           />
         
        </div>
      
        <button type="submit" className="btn btn-primary">Добавить</button>
      </form>
      )

    
    } 