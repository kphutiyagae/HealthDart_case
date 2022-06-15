import React from 'react'
import { Text, View } from 'react-native'
import OrderTabBar from '../components/OrderTabBar/OrderTabBar'
import tw from "twrnc";
import ListContainer from '../components/list-container/ListContainer';

export default function OrderScreenContainer() {
  return (
    <View
    style={tw`bg-blue-300 w-full h-full`}
    >
      <OrderTabBar />
      <ListContainer />
      </View>
  )
}
