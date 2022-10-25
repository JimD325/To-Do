import React, { useReducer, useState, useContext } from 'react';
import { AddForm } from './addForm';
import { List } from './List';
// import {ThemeContext} from "../../app"

export interface Card {
  name: string,
  description: string,
  completeBy: string,
  completed: boolean
}

// export const dispatchAction = (
//   cards: Card[],
//   action: {
//     action: "add",
//     body: any,
//   }
// ): Card[] => {
//   switch (action.action) {
//     case "add":
//       return addItem(cards, action.body)
//   }
// }

// export const addItem = (
//   list: any,
//   state: Card[],
// ) => {
//   const newCards = [...tasks, list]
//   console.log("list on add Item", list);
//   state = [...state, list];
//   console.log("state on add Item", state);
//   return { ...state }
// }

const initialState: Card[] = [
  {
  name: "gettr",
  description: "done",
  completeBy: "Aug 25",
  completed: false
}
]
  



export const ToDo: React.FC = () => {
  // const [cards, dispatch] = useReducer(dispatchAction, [initialState]);
  const [tasks, setTasks] = useState(initialState);
  // const darkMode = useContext(ThemeContext);

  function addItem(card:any) {
    setTasks([...tasks, card])
    // console.log("darkMode on add item", darkMode);
  }


  // reducer function must update the state in an immutable matnner, and return the new state. 
  // form data being passed from form, useReducer on todo, then pass that combined state down to list as props, then render props. 






  return (
    <body id="body">
      <AddForm addItem={addItem} />
      <List list={tasks} />
    </body>
  )
}