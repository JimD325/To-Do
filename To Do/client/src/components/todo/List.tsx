import * as React from "react";
import Cards from "@cloudscape-design/components/cards";
import Box from "@cloudscape-design/components/box";
import Button from "@cloudscape-design/components/button";
import Header from "@cloudscape-design/components/header";
import { useCollection } from '@cloudscape-design/collection-hooks';
import Pagination from "@cloudscape-design/components/pagination";
import Link from "@cloudscape-design/components/link"
import CollectionPreferences from "@cloudscape-design/components/collection-preferences";
import { useReducer, useEffect, useContext } from 'react';


import { LightDarkContext } from "../../context/settings/context";



// export interface ListState {
//   items: {
//     name:string,
//     description:string,
//     completeBy: Date,
//   }
// }
// export type Card = {
//   name: string,
//   description:string,
//   completeBy: Date,
// }
/**
 * Used to bring in a card from the form and append item to state
 */
// export const addCard = (
//   state: ListState,
//   items: any
// ) => {
//   // console.log("state and object makeCard on list", state, items);
//   return {...state};
// }
// export const dispatch = (
//   state: ListState,
//   action: {
//     action: string,
//     body: unknown,
//   }
// ) => {
//   switch(action.action) {
//     case "add":
//     // console.log("dispatch action fired in list", state);
//   return addCard(state, action.body as object);
//   // case "remove":
//   //   // console.log("dispatch action fired in list", state);
//   // return removeCard(state,action.body as object);
//   default: 
//   return state;
//   }
// }






// export const formToCard = (cardData: object, arr: object[]) => {
//   console.log("card data and array Form to Card --->", cardData, arr)
// }


export const List = (props: any) => {
//[props.list].flat() => items being displayed

  const [selectedItems, setSelectedItems] = React.useState([{ name: "" }]);

  const theme = useContext(LightDarkContext);

  return (

    <Cards className={theme.theme === "awsui-dark-mode" ? "awsui-dark-mode" : "awsui-light-mode"}
      onSelectionChange={({ detail }) =>
        setSelectedItems(detail.selectedItems)
      }
      ariaLabels={{
        itemSelectionLabel: (e, t) => `select ${t.name}`,
        selectionGroupLabel: "Item selection"
      }}

      selectedItems={selectedItems}
      cardDefinition={{
        header: item => (
          <Link fontSize="heading-m">{item?.name}</Link>
        ),
        sections: [
          {
            id: "description",
            header: "Description",
            content: item => item?.description
          },
          // {
          //   id: "type",
          //   header: "Type",
          //   content: item => item.type
          // },
          {
            id: "Complete By",
            header: "Complete By",
            content: item => item?.completeBy
          }
        ]
      }}
      cardsPerRow={[
        { cards: 1 },
        { minWidth: 500, cards: 1, }
      ]}
      items={[props.list].flat()}
      loadingText="Getting your list"
      selectionType="multi"
      trackBy="name"
      // visibleSections={["name", "description", "completeBy"]}
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
      header={
        <Header
          counter={
            selectedItems.length
              ? "(" + selectedItems.length + "/10)"
              : "(10)"
          }
        >
          Common cards with selection
        </Header>
      }
      pagination={
        <Pagination currentPageIndex={1} pagesCount={2} />
      }
      preferences={
        <CollectionPreferences
          title="Preferences"
          confirmLabel="Confirm"
          cancelLabel="Cancel"
          preferences={{
            pageSize: 6,
            visibleContent: [
              "description",
              "type",
              "size"
            ]
          }}
          pageSizePreference={{
            title: "Select page size",
            options: [
              { value: 6, label: "6 resources" },
              { value: 12, label: "12 resources" }
            ]
          }}
          visibleContentPreference={{
            title: "Select visible content",
            options: [
              {
                label: "Main distribution properties",
                options: [
                  { id: "completeBy", label: "Complete By" },
                  {
                    id: "description",
                    label: "Description"
                  },
                  { id: "name", label: "Name" },
                ]
              }
            ]
          }}
        />
      }
    />
  );

}