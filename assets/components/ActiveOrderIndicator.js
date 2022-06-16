import React from 'react'
import { View } from 'react-native'
import tw from 'twrnc'

/* 
Functional component for indicating order status (passed in via props) which returns view
for rendering by ListItem component.
*/
export default function ActiveOrderIndicator(props) {

  return (
    <View
    style={tw`w-2 h-2 bg-red-400 rounded-xl`}>
    
    </View>
  )
}
