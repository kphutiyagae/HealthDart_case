import React from 'react';
import ListItem from './ListItem';
import { SectionList, Text } from 'react-native';
import tw from "twrnc";

const orderData = require('../data/orders.json');    //Importing given order data
/*
ListContainer takes in orders data, formats data to filter orders based on given criteria for each section. 
arrays are passed to SectionList component with two sections "Pending Orders" and "Delivered Orders" , where they are mapped to custom ListItem
components and returned to OrderScreenContainer for rendering.
*/

export default function ListContainer() {

  //Function to filter orders such as to only return array of orders that are pending (including cancelled, submitted and out for delivery orders.)
  const pendingOrderArray = getPendingOrders();

  //Function to filter orders such as to only return array of only orders that are delivered.
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
      style={tw`font-bold my-5 ml-5 text-lg`}
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
