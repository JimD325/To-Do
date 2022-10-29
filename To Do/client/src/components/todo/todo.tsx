import axios from 'axios';
import React, { useState } from 'react';
import { AddForm } from './addForm';
import { List } from './List';
// import {ThemeContext} from "../../app"

export interface ToDoCard {
  name: string,
  description: string,
  completeBy: string,
  completed: boolean,
  assignedOn: string
}



const initialState: ToDoCard[] = [

]
  



export const ToDo: React.FC = () => {
  const [tasks, setTasks] = useState(initialState);
  // const darkMode = useContext(ThemeContext);

  function addItemToDB(card:ToDoCard) {
    axios({
      method: "POST",
      url: "http://localhost:3001/task",
      data: card
    }).then(function (res) {
      console.log("res on addItemToDB", res.data);
      setTasks([...tasks, res.data])
    })
  }



  return (
    
    <body id="body">
      <AddForm addItem={addItemToDB} />
      <List list={tasks} setList = {setTasks}/>
    </body>
  )
}