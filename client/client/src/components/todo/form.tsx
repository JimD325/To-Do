import * as React from "react";
import Form from "@cloudscape-design/components/form";
import Button from "@cloudscape-design/components/button";
import Header from "@cloudscape-design/components/header";
import SpaceBetween from "@cloudscape-design/components/space-between";
import Container from "@cloudscape-design/components/container";
import FormField from "@cloudscape-design/components/form-field";
import Input from "@cloudscape-design/components/input";
import DatePicker from "@cloudscape-design/components/date-picker";

export const AddForm = () => {
  const [title, setTitle] = React.useState("Hello World");
  const [description, setDescription] = React.useState("Hello World");
  const [date, setDate] = React.useState("Hello World");
  return (
    <form onSubmit={e => e.preventDefault()}>
      <Form
        actions={
          <SpaceBetween direction="horizontal" size="xs">
            <Button formAction="none" variant="link">
              Cancel
            </Button>
            <Button variant="primary">Submit</Button>
          </SpaceBetween>
        }
        header={
          <Header
            variant="h1"
            description="You can find more examples in FormField documentation page"
          >
            Form header
          </Header>
        }
      >
        <Container
          header={
            <Header variant="h2">
              Form container header
            </Header>
          }
        >
          <SpaceBetween direction="vertical" size="l">
            <FormField label="To-Do Title">
              <Input
                onChange={({ detail }) => setTitle(detail.value)}
                value={title}
              />
            </FormField>
            <FormField label="To-Do Description">
              <Input
                onChange={({ detail }) => setDescription(detail.value)}
                value={description}
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
  );
}