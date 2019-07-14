import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import DateCardStyle from './DateCardStyle';


const DateCard = ({ fieldName, onPress, placeholder, date }) => {
   return (
      <View style={DateCardStyle.DateCardContainer}>
         <Text style={DateCardStyle.cardTitle}>{fieldName}</Text>
         <TouchableOpacity
            onPress={onPress}
            style={DateCardStyle.cardInput}
         >
            {date == null ? <Text style={DateCardStyle.dateTextStyle}>{placeholder}</Text> : <Text>{date}</Text>}
         </TouchableOpacity>
      </View>
   )
}

export default DateCard