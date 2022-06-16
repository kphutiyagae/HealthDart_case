// In App.js in a new project

import * as React from "react";
import { View, Text } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import tw from "twrnc";

import OrderScreenContainer from "./assets/views/OrderScreenContainer";     //Custom component

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
    </View>
  );
}

function ConsultScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Consult Screen</Text>
    </View>
  );
}

function OrderScreen() {
  return (
    <View style={tw`flex-1 justify-center items-center bg-white`}>
      <OrderScreenContainer />
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Profile Screen</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: () => <FontAwesome5 name="home" />, //Retrieve home icon from react-native-vector-icons/FontAwesome5 and set as home tab icon.
          }}
        />
        <Stack.Screen
          name="Consults"
          component={ConsultScreen}
          options={{
            tabBarBadge: 0,
            tabBarIcon: () => <FontAwesome5 name="comment-alt" />, //Retrieve comment-alt from react-native-vector-icons/FontAwesome5 and set as Consults tab icon.
          }}
        />

        <Stack.Screen
          name="Orders"
          component={OrderScreen}
          options={{
            tabBarBadge: 0,
            tabBarIcon: () => <FontAwesome5 name="shopping-cart" />, //Retrieve shopping-cart icon from react-native-vector-icons/FontAwesome5 and set as orders tab icon.
          }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: () => <FontAwesome5 name="user-cog" />, //Retrieve user-cog icon from react-native-vector-icons/FontAwesome5 and set as profile tab icon.
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// Options for bottom navigation tab behaviour (active tab styling etc.) and styling.
const screenOptions = {
  tabBarActiveTintColor: "#5BFF8A",
  tabBarInactiveTintColor: "black",
  tabBarShowIcon: true,
  tabBarIcon: ({ route }) => {
    console.log(route);
  },
  tabBarStyle: [
    {
      display: "flex",
    },
    null,
  ],
};

export default App;
