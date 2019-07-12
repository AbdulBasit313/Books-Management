import React from 'react'
import { Text, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'
import BackIcon from 'react-native-vector-icons/AntDesign'


export const Menu = ({ navigation }) => {
   return (
      <TouchableOpacity style={{ marginLeft: 10 }} onPress={() => navigation.openDrawer()} >
         <Icon name="md-menu" size={30} color='white' />
      </TouchableOpacity>
   )
}

export const BackButton = ({ navigation }) => {
   return (
      <TouchableOpacity style={{ marginLeft: 13 }} onPress={() => navigation.goBack()} >
         <BackIcon name="back" size={25} color='white' />
      </TouchableOpacity>
   )
}