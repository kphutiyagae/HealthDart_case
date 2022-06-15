import React from 'react'
import { Text, View } from 'react-native'
import tw from "twrnc";
import ActiveOrderIndicator from '../ActiveOrderIndicator/ActiveOrderIndicator';

/*
Functional component that will map JSON data to UI Component.
*/

export default function ListItem(props) {
    return (    
    <View
    style={tw`bg-gray-100 rounded-sm w-96 p-4 my-1`}
    >
        <ActiveOrderIndicator />
        <Text style={tw`text-base my-2 font-bold`}>{props.order_status}</Text>
        <Text style={tw`text-xl mb-1 font-extrabold`}>{props.pharmacy_name}</Text>
        <Text style={tw`text-base`}>Sum Total : R{props.order_total}</Text>
        <Text>&gt;</Text>
    </View>
  )
}
