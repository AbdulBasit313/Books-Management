import React from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import Functions from '../../common/Functions';


const AddButton = ({ onPress, style }) => {
   return (
      <TouchableOpacity onPress={onPress} activeOpacity={0.8} style={style}>
         <Icon
            name="pluscircle" size={52} color={Functions.primaryColor}
         />
      </TouchableOpacity>
   )
}


export default AddButton