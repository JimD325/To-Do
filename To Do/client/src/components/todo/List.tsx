import * as React from "react";
import Cards from "@cloudscape-design/components/cards";
import Button from "@cloudscape-design/components/button";
import Header from "@cloudscape-design/components/header";
import Link from "@cloudscape-design/components/link"
import { useContext, useState, useEffect } from 'react';
import "./todo.css"

import {SelectedModal} from "./modal";

import { LightDarkContext } from "../../context/settings/context";
import Container from "@cloudscape-design/components/container";

import Form from "@cloudscape-design/components/form";
import axios from "axios";

// export type taskMongoType = {
//   id: string,
//   name: string,
//   description: string,
//   completeBy: string,
//   completed: boolean,
//   __v: number
// }



export const List = (props: any) => {
 
  useEffect(() => {
    props.getTasks();
  }, [])

  const [selectedItems, setSelectedItems] = React.useState([{
    _id: "",
    name: "",
    description: "",
    completeBy: "",
    completed: false,
    __v: 0
  }]);


  const openModal = (detail: any): void => {
    setSelectedItems(detail?.selectedItems);
    console.log("detail?.selectedItems", detail?.selectedItems);
    console.log("selectedItems", selectedItems);
  }



  const theme = useContext(LightDarkContext);

  return (
    
    <Container id="ListContainer">
      {selectedItems[0]._id.length > 0 ? <SelectedModal 
      selectedItem = {selectedItems} setSelectedItems= {setSelectedItems}
      deleteFromDB = {props.deleteFromDB} 
      editInDB = {props.editInDB}
      // getTasksOnLoad = {getTasksOnLoad} 
      className = "modal"/> : <p>testing testing 123</p>}
      
      <Cards className={theme.theme === "awsui-dark-mode" ? "awsui-dark-mode" : "awsui-light-mode"}
      
        onSelectionChange={({ detail }) =>
          openModal(detail)
        }
        selectedItems={selectedItems}
        ariaLabels={{
          itemSelectionLabel: (e, t) => `select ${t.name}`,
          selectionGroupLabel: "Item selection"
        }}
        cardDefinition={{
          header: item => (
            <Link fontSize="heading-m">{item?.name}</Link>
          ),
          sections: [
            {
              id: "description",
              header: "Description",
              content: item => item.description
            },
            {
              id: "completeBy",
              header: "Complete By",
              content: item => item.completeBy
            }
          ]
        }}
        cardsPerRow={[
          { cards: 1 },
          { minWidth: 300, cards: 2, }
        ]}
        items={props.list}
        loadingText="Getting your list"
        selectionType="single"
        trackBy="_id"
        visibleSections={["name", "description", "completeBy"]}
        // box below displays only when there are no tasks 
        header={
          <Header>
            To Do List
          </Header>
        }
        
      />
      <Button formAction="submit" >Add to your list</Button>
    </Container>

  );

}