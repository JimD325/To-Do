import * as React from "react";
import Cards from "@cloudscape-design/components/cards";
import Box from "@cloudscape-design/components/box";
import CollectionPreferences from "@cloudscape-design/components/collection-preferences";
import TextFilter from "@cloudscape-design/components/text-filter";
import Button from "@cloudscape-design/components/button";
import Header from "@cloudscape-design/components/header";
import Pagination from "@cloudscape-design/components/pagination";
import Link from "@cloudscape-design/components/link"

export const List = () => {
  return (
    <Cards
      ariaLabels={{
        itemSelectionLabel: (e, t) => `select ${t.name}`,
        selectionGroupLabel: "Item selection"
      }}
      cardDefinition={{
        header: item => (
          <Link fontSize="heading-m">{item.name}</Link>
        ),
        sections: [
          {
            id: "description",
            header: "Description",
            content: item => item.description
          },
          {
            id: "type",
            header: "Type",
            content: item => item.type
          },
          {
            id: "Complete By",
            header: "Complete By",
            content: item => item.completeBy
          }
        ]
      }}
      cardsPerRow={[
        { cards: 1 },
        // { minWidth: 500, cards: 1,  }
      ]}
      items={[
        {
          name: "Item 1",
          description: "This is the first item",
          type: "Personal",
          completeBy: "Aug 5",
        },
        {
          name: "Item 2",
          description: "This is the second item",
          type: "Professional",
          completeBy: "Aug 23",
        },

      ]}
      loadingText="Loading resources"
      empty={
        <Box textAlign="center" color="inherit">
          <b>No resources</b>
          <Box
            padding={{ bottom: "s" }}
            variant="p"
            color="inherit"
          >
            No resources to display.
          </Box>
          <Button>Add to you list</Button>
        </Box>
      }
      header={<Header>Todo</Header>}
    />
  );

}