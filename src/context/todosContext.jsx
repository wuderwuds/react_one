import { useTodos } from "../hooks/useTodos";
import React from "react";

export const ContextTodo = React.createContext()
export const ContextFun = React.createContext()

export const TodosConrextProvider = ({Children}) => {

    const {todos, addToList, deleteList, deleteOneTodo, updTodoStatus} = useTodos()
    
    const fun = {addToList, deleteList, deleteOneTodo, updTodoStatus}
    
    return(

        <ContextTodo.Provider value={todos}>
            <ContextFun.Provider value={fun}>
                {Children}
            </ContextFun.Provider>
        </ContextTodo.Provider>
    )
}