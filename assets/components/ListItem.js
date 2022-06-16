import React from "react";
import { Text, View, StyleSheet } from "react-native";
import tw from "twrnc";
import ActiveOrderIndicator from "./ActiveOrderIndicator";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

/*
Functional component that maps JSON data passed to component via props to 
fields (Text components within View components) within ListItem component.

OrderStatus of current order also passed to ActiveOrderIndicator for conditional rendering 
returning indicator reflecting order status.
*/

export default function ListItem(props) {
  return (
    <View style={listItemStyles.container}>
      <View style={listItemStyles.Orderindicator}>
        <ActiveOrderIndicator orderStatus={props.order_status} />
      </View>

      <View style={listItemStyles.orderInfo}>
        <Text style={tw`text-base my-2 font-bold`}>{props.order_status}</Text>
        <Text style={tw`text-xl mb-1 font-extrabold`}>
          {props.pharmacy_name}
        </Text>
        <Text style={tw`text-base`}>Sum Total : R{props.order_total}</Text>
      </View>

      <View style={listItemStyles.nextArrow}>
        <FontAwesome5 name="chevron-right" size={15} />
      </View>
    </View>
  );
}

/* 
ListItemStyles used in place of tailwind-react-native-classes.
(Compatibility issues with twrnc and applying flex layout styling for ListItem component.)
*/
const listItemStyles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    backgroundColor: "#dddddd",
    justifyContent: "space-evenly",
    marginBottom: 10,
    padding: 20,
    width: 360,
    marginLeft : 20,
    borderRadius: 3,
  },

  orderInfo: {
    padding: 5,
    marginLeft: 20,
    width: "auto",
    minWidth: 280,
  },

  nextArrow: {
    padding: 5,
    marginLeft: "auto",
    marginRight: 10,
    width: "auto",
    height: "auto",
    marginTop: 40,
  },

  Orderindicator: {
    marginTop: 19,
  },
});
