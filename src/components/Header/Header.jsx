import { Form } from '../Form/form'
import './header.css'
import React from 'react'
const Header = ({addToList}) => {
    return (
        <>
        <header className="wrapper">Header!!!!</header>
   <Form addToList={addToList}/>
        </>
    )
}
export const MemoHeader = React.memo(Header)