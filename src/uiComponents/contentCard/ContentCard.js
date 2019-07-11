import React, { Component } from 'react'
import { Text, View } from 'react-native'
import ContentCardStyle from './ContentCardStyle';


const ContentCard = ({ children }) => {
   return (
      <View style={ContentCardStyle.card}>
         {children}
      </View>
   )
}


export default ContentCard