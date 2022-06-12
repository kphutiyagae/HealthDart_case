import React from 'react'
import { Text } from 'react-native'
import { View } from 'react-native';
import ListItem from '../list-item/ListItem';

const orderData = require('../../data/orders.json');    //Importing given order data

export default function Listcontainer() {
  return (
        orderData.map( (data, i) => ( 
            <ListItem 
            order_status={data.orderStatus}
            pharmacy_name={data.pharmacyName}
            order_total={data.orderTotal}
            />
         ))
  )
}
