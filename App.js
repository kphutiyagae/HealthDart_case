// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import tw from "twrnc";

import OrderScreenContainer from './assets/views/OrderScreenContainer';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

function ConsultScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Consult Screen</Text>
    </View>
  );
}

function OrderScreen() {
  return (
    <View style={tw`flex-1 justify-center items-center bg-white`}>
      <OrderScreenContainer/>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile Screen</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const screenOptions = ({route}) => ({
  tabBarIcon : ({ focused, color, size}) => {
    let iconName;

    let routeName = route.name;

    if(routeName === 'Home'){
      iconName = 'home';
    }
    else if(routeName === 'Consults'){
      iconName = 'comment-alt';
    }
    else if(routeName === 'Orders'){
      iconName = 'shopping-cart';
    }
    else if(routeName === 'Profile'){
      iconName = 'user-cog';
    }
    return <FontAwesome5 name={iconName} />

  },

})

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor : '#5BFF8A',
        tabBarInactiveTintColor : 'black',
        tabBarShowIcon: true,
        tabBarIcon : ({tabInfo}) =>{
          console.log(tabInfo);
        },
        tabBarStyle : [
          {
            display : 'flex'          
          },
          null
        ]
      }}
      >
        <Stack.Screen  name="Home" component={HomeScreen} options={{
          tabBarIcon: () => ( <FontAwesome5 name='home' />)
        }} /> 
        <Stack.Screen name="Consults" component={ConsultScreen} 
        options={{
          tabBarIcon: () => ( <FontAwesome5 name='comment-alt' />)
        }}
        />

        <Stack.Screen name="Orders" component={OrderScreen} 
        options={{
          tabBarIcon: () => ( <FontAwesome5 name='shopping-cart' />)
        }}        
        />
        <Stack.Screen name="Profile" component={ProfileScreen} 
        options={{
          tabBarIcon: () => ( <FontAwesome5 name='user-cog' />)
        }}        
        />
    </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;