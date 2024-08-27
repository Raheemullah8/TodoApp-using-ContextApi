import { createContext, useContext } from "react";

export const TodoContex = createContext({
  todos: [
    {
      id: 1,
      todo: "Dumy Data",
      completed: false,
    },
  ],


  AddTodo: (todo) => {},

  UpdateTodo: (id, todo) => {},

  DeleteTodo: (id) => {},

  toggleComplete: (id) => {},
  
});

export const  useTodo =()=>{
  return(useContext(TodoContex))
}


export const TodoProvider = TodoContex.Provider
