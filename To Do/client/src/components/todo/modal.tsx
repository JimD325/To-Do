import * as React from "react";
import Modal from "@cloudscape-design/components/modal";
import Box from "@cloudscape-design/components/box";
import SpaceBetween from "@cloudscape-design/components/space-between";
import Button from "@cloudscape-design/components/button";
import { useEffect, useState } from "react"
import axios from "axios";
import Form from "@cloudscape-design/components/form";
import Header from "@cloudscape-design/components/header";
import Container from "@cloudscape-design/components/container";
import FormField from "@cloudscape-design/components/form-field";
import Input from "@cloudscape-design/components/input";
import DatePicker from "@cloudscape-design/components/date-picker";


export const SelectedModal = (props: any) => {
  const [visible, setVisible] = React.useState(false);
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [date, setDate] = React.useState("");


  useEffect(() => {
    setTitle(props.selectedItem[0].name);
    setDescription(props.selectedItem[0].description);
    setDate(props.selectedItem[0].date)
    setVisible(true);
  }, [props.selectedItem])


  const handleDelete = (id:any) => {
    console.log("id on handleDelete", id);
    props.deleteFromDB(id);
    setVisible(false);
  }

  const handleEdit = (selectedItem: any) => {
    console.log("selected item on handle Edit", selectedItem)
    let formData = selectedItem;
    formData.name = title;
    formData.completeBy = date;
    formData.description = description;
    console.log('edited form data', formData)
    props.editInDB(formData);
    setVisible(false)
  }



  return (
    <Modal
      onDismiss={() => setVisible(false)}
      visible={visible}
      closeAriaLabel="Close modal"
      footer={
        <Box float="right">
          <SpaceBetween direction="horizontal" size="xs">
            <Button variant="link"
              onClick={() => handleDelete(props.selectedItem[0]._id)}
            >Mark as complete</Button>
            <Button variant="link"
              onClick={() => handleEdit(props.selectedItem[0])}
            >Edit Item
            </Button>
          </SpaceBetween>
        </Box>
      }

    >
      <form onSubmit={e => e.preventDefault()}>
        <Form>
          <Container
            header={
              <Header variant="h2">
                Edit Your Task Below
              </Header>
            }
          >
            <SpaceBetween direction="vertical" size="l">
              <FormField label="Task Name">
                <Input
                  onChange={({ detail }) => setTitle(detail.value)}
                  value={title}
                  placeholder={props.selectedItem[0].name}

                />
              </FormField>
              <FormField label="To-Do Description">
                <Input
                  onChange={({ detail }) => setDescription(detail.value)}
                  value={description}
                  placeholder="Description of item"
                />
              </FormField>
              <FormField
                label="Complete By"
                constraintText="Use YYYY/MM/DD format."
              >
                <DatePicker
                  onChange={({ detail }) => setDate(detail.value)}
                  value={date}
                  openCalendarAriaLabel={(selectedDate: any) =>
                    "Choose certificate expiry date" +
                    (selectedDate
                      ? `, selected date is ${selectedDate}`
                      : "")
                  }
                  nextMonthAriaLabel="Next month"
                  placeholder="YYYY/MM/DD"
                  previousMonthAriaLabel="Previous month"
                  todayAriaLabel="Today"
                />
              </FormField>
            </SpaceBetween>
          </Container>
        </Form>
      </form>

    </Modal>
  );
}