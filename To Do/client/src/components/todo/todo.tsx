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

const initialState: ToDoCard[] = []

  
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
    });
    console.log("tasks on add item to db", tasks)
  }

  const getTasks = () => {
    axios({
      method: "GET",
      url: "http://localhost:3001/task"
    }).then((res) => {
      setTasks(res.data);
      console.log("tasks on get Tasks", tasks)
    }).catch((err) => console.log(err))
  }

  const deleteFromDB = (props: any) => {
    console.log("props on delete on modal", props);
    axios({
      method: "DELETE",
      url: `http://localhost:3001/task/${props}`
    })
    .then(() => {
      console.log("get tasks on deleteFromDB ran")
      getTasks()
    })
    .catch((err) => console.log(err));
  }

  const editInDB = (formData: any) => {
    console.log("form data on edit in db", formData);
    axios.put(`http://localhost:3001/task/${formData._id}`, formData
    )
    .then(()=> {
      getTasks()
    })
    .catch((err) => console.log(err));
  }
  


  return (
    
    <body id="body">
      <AddForm 
      addItem={addItemToDB} 
      
      />
      <List 
      list={tasks} 
      setList = {setTasks}
      getTasks = {getTasks}
      deleteFromDB = {deleteFromDB}
      editInDB = {editInDB}
      />
    </body>
  )
}