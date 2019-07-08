import React from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'


const AddButton = ({ onPress, style }) => {
   return (
      <TouchableOpacity onPress={onPress} activeOpacity={0.6} style={style}>
         <Icon
            name="pluscircle" size={52} color="#0078D7"
         />
      </TouchableOpacity>
   )
}


export default AddButton