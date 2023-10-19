
import { useReducer, useEffect, useState } from "react";
import {todoReducer} from "../08-useReducer/todoReducer"



export const useTodo = (second) => {
    
    const inicial = () => {
        
        return JSON.parse(localStorage.getItem("todos")) || [];
    }
    
    
    const [ todos, dispatch ] = useReducer(todoReducer, [], inicial)
    
    
    // const [todosCount, setTodosCount] = useState(0)
    // const [pendingCount, setPendingCount] = useState(0)
    

    // const pending =  JSON.stringify(todos.filter(todo => !todo.done).length)


        // useEffect(() => {    
        //     setPendingCount(pending)
        // }, [pending])

        // useEffect(() => {    
        //     setTodosCount(todos.length)
        // }, [todos.length])
        
        useEffect(() => {    
            localStorage.setItem("todos", JSON.stringify(todos))
        }, [todos])
        
    

    const handleNewTodo = (todo) => {
        const action = {
            type:"[TODO] Add Todo",
            payload:todo,
        }
        dispatch( action )
    }

    const handleDelete = (todo) => {
        const action = {
            type:"[TODO] Delete Todo",
            payload:todo.id,
        }
        dispatch( action )
    }

    const handleToggle = (todo) => {
        const action = {
            type:"[TODO] Toggle Todo",
            payload:todo.id,
        }
        dispatch( action )
    }


    return {
        
        handleDelete,
        handleNewTodo,
        handleToggle,
        todos,
        todosCount: todos.length,
        pendingCount: todos.filter(todo => !todo.done).length,
    }
    
}