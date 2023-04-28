import { Form } from '../Form/form'
import './header.css'
function Header({addToList}) {
    return (
        <>
        <header className="wrapper">Header!!!!</header>
   <Form addToList={addToList}/>
        </>
    )
}
export {Header}