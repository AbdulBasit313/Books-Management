import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import SubmitButtonStyle from './SubmitButtonStyle';


const SubmitButton = ({ style, onPress }) => {
   return (
      <TouchableOpacity
         style={SubmitButtonStyle.buttonContainer}
         activeOpacity={0.8}
         onPress={onPress}
      >
         <Text style={SubmitButtonStyle.buttonStyle}> SUBMIT BOOK </Text>
      </TouchableOpacity>
   )
}


export default SubmitButton
