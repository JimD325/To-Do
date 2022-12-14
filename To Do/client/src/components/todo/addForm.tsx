import * as React from "react";
import { useContext } from 'react';
import Form from "@cloudscape-design/components/form";
import Button from "@cloudscape-design/components/button";
import Header from "@cloudscape-design/components/header";
import SpaceBetween from "@cloudscape-design/components/space-between";
import Container from "@cloudscape-design/components/container";
import FormField from "@cloudscape-design/components/form-field";
import Input from "@cloudscape-design/components/input";
import DatePicker from "@cloudscape-design/components/date-picker";
import { SettingsContext } from "../../context/settings/context"
import { useAuth0 } from "@auth0/auth0-react";




export const AddForm = (props: any) => {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [date, setDate] = React.useState("");
  const theme = useContext(SettingsContext);
  const {isAuthenticated, user} = useAuth0();

  const handleSubmit = (e: any, callback: Function) => {
    e.preventDefault();
    let assignedOn = date.toLocaleString();
    if(user){
      let formData = {
      name: title,
      description: description,
      assignedOn: assignedOn,
      completeBy: date,
      completed: false,
      email: user.email
    }
    callback(...[formData])
    console.log("form data on addForm", formData);
    } else {
      return;
    }
    

  }


  return (
    <Container id="ListContainer"
    
    >
      <form className={theme.theme === "awsui-dark-mode" ? "awsui-dark-mode" : "awsui-light-mode"} onSubmit={e => handleSubmit(e, props.addItem)}>
        <Form
          actions={
            <SpaceBetween direction="horizontal" size="xs">
              <Button formAction="none" variant="normal" >
                Clear
              </Button>
              <Button variant="primary">Submit</Button>
            </SpaceBetween>
          }
        >
          <Container
            header={
              <Header variant="h2">
                Create a new task below
              </Header>
            }
          >
            <SpaceBetween direction="vertical" size="l">
              <FormField label="To-Do Title">
                <Input
                  onChange={({ detail }) => setTitle(detail.value)}
                  value={title}
                  placeholder="Name of item"
                 
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
                  openCalendarAriaLabel={selectedDate =>
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
    </Container>
  );
}