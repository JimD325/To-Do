import * as React from "react";
import Modal from "@cloudscape-design/components/modal";
import Box from "@cloudscape-design/components/box";
import SpaceBetween from "@cloudscape-design/components/space-between";
import Button from "@cloudscape-design/components/button";
import {useEffect, useState} from "react"
import axios from "axios";


export const SelectedModal = (props:any) => {
  const [visible, setVisible] = React.useState(false);


  useEffect(() => {
    setVisible(true);
  }, [])

  const deleteFromDB = (props:any) => {
    console.log("props on delete on modal");
    axios({
      method: "DELETE",
      url: `http://localhost:3001/task/${props.selectedItem[0]._id}`
    }).then(() => {
      setVisible(false);
      props.setSelectedItem({
        id: "",
        name: "",
        description: "",
        completeBy: "",
        completed: false,
        __v: false
      });
      props.getTasksOnLoad();
      console.log("item deleted from DB");

    }).catch((err) => console.log(err));
  }

  const editInDB = (props:any) => {
    
  }

  // console.log("props on selectedModal", props.selectedItem);
  // if(props.selectedItem[0].name.length > 0){
  //   console.log("setVisible to true ran")
  // }

  return (
    <Modal
      onDismiss={() => setVisible(false)}
      visible={visible}
      closeAriaLabel="Close modal"
      footer={
        <Box float="right">
          <SpaceBetween direction="horizontal" size="xs">
            <Button variant="link"
            onClick={() => deleteFromDB(props)}
            >Remove From List</Button>
            <Button variant="primary"
            // onClick={editInDB(props)}
            >Edit Item
            </Button>
          </SpaceBetween>
        </Box>
      }
      header="Modal title"
    >
      Your description should go here
    </Modal>
  );
}