import React, { Component } from 'react'
import { Text, View, TextInput } from 'react-native'

const InputCard = ({ filedName, onChangeText, placeholder }) => {
   return (
      <View>
         <Text>{filedName}</Text>
         <TextInput
            onChangeText={onChangeText}
            placeholder={placeholder}
         />
      </View>
   )
}

export default InputCard