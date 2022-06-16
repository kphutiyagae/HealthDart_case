import React from "react";
import { Text, View } from "react-native";
import tw from "twrnc";
import ListContainer from "../components/ListContainer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

/* 
Function to return Open Orders screen for rendering
*/
function OpenOrdersScreen() {
  return (
    <View style={tw`flex-1 justify-center items-center bg-white`}>
      <Text> Place Order Screen</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

/*OrderScreenContainer function serves as a container for the NavigationContainer component. So as to allow navigation between the tabs "Open orders"
and "Submitted orders" as in the supplied .gif file. 

Prop "independent" set to true so as to allow NavigationContainer nesting (App.js contains separate NavigationContainer cpomonent for main (home, consults etc.) tabs).
*/

export default function OrderScreenContainer() {
  return (
    <View style={tw`w-full h-full`}>
      <NavigationContainer independent={true}>
        <Tab.Navigator screenOptions={screenOptions}>
          <Stack.Screen
            name="Open orders"
            component={OpenOrdersScreen}
            options={{
              tabBarBadge: 0,
            }}
          />
          <Stack.Screen name="Submitted orders" component={ListContainer} />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}

// Options for navigation tab behaviour (active tab styling etc.) and styling.
const screenOptions = {
  tabBarActiveBackgroundColor: "#EEEEEE",
  tabBarInactiveTintColor: "black",
  tabBarShowIcon: false,
  tabBarIconStyle: {
    display: "none",
  },
  tabBarLabelStyle: {
    marginBottom: 15,
    fontWeight: "bold",
    fontSize: 15,
  },
};
