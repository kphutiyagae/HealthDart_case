import React from 'react';
import ListItem from '../list-item/ListItem';
import { SectionList, Text } from 'react-native';
import tw from "twrnc";

const orderData = require('../../data/orders.json');    //Importing given order data

export default function ListContainer() {

  const pendingOrderArray = getPendingOrders();

  const deliveredOrderArray = getDeliveredOrders();

  return (
    <SectionList 
    sections={
      [
        {
        title : 'Pending Orders',
        data : pendingOrderArray
      },
      {
        title : 'Delivered',
        data : deliveredOrderArray
      }
      ]
    }
    renderItem={ ({item}) => <ListItem 
    key={item.orderID}
    order_status={item.orderStatus}
    pharmacy_name={item.pharmacyName}
    order_total={item.orderTotal}
    /> }
    renderSectionHeader={({section}) => (
      <Text
      style={tw`font-bold my-5 ml-2 text-lg`}
      >{section.title}</Text>
    )}
    keyExtractor={ (item, index) => index}
    />
  )

}

//This function filters the data for all orders that are delivered and returns them as a JSON array.
function getDeliveredOrders(){

  const deliveredOrders = orderData.filter( x => x.orderStatus === 'Delivered');
  return deliveredOrders;
}

//This function filters the data for all orders that are pending (Out for delivery, Submitted and Cancelled) and returns them as a JSON array.
function getPendingOrders(){

  const pendingOrders = orderData.filter( x => !(x.orderStatus === 'Delivered') );  
  return pendingOrders;
}
