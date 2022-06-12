import React from 'react'
import { Text, View } from 'react-native'

/*
Functional component that will map JSON data to UI Component.
*/

export default function ListItem(props) {
    return (    
    <View>
        <Text>{props.order_status}</Text>
        <Text>{props.pharmacy_name}</Text>
        <Text>Sum Total : R{props.order_total}</Text>
    </View>
  )
}
