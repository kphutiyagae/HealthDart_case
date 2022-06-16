import React from 'react'
import { StyleSheet, View } from 'react-native'

/* 
Functional component for indicating order status (passed in via props) which returns view
for rendering by ListItem component.
*/
export default function ActiveOrderIndicator(props) {
  return (
    <View
    style={[ActiveOrderIndicatorStyles.indicatorSize, props.orderStatus === 'Submitted' ? ActiveOrderIndicatorStyles.orderActive : ActiveOrderIndicatorStyles.orderInactive]}>
    
    </View>
  )
}

const ActiveOrderIndicatorStyles = StyleSheet.create({

  indicatorSize : {
    height : 5,
    width : 5,
    borderRadius : 100    
  },

  orderActive :{
    backgroundColor : '#4fff70'
  },

  orderInactive : {
  backgroundColor : 'red'    
  }
});