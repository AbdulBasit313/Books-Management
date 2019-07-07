import React, { Component } from 'react'
import { Text, View, TextInput } from 'react-native'
import InputCardStyle from './InputCardStyle';

const InputCard = ({ filedName, onChangeText, placeholder }) => {
   return (
      <View style={InputCardStyle.InputCardContainer}>
         <Text style={InputCardStyle.cardTitle}>{filedName}</Text>
         <TextInput
            style={InputCardStyle.cardInput}
            onChangeText={onChangeText}
            placeholder={placeholder}
         />
      </View>
   )
}

export default InputCard