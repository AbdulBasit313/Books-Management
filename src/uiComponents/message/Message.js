import React from 'react'
import { Text, View } from 'react-native'
import CustomStyle from '../../common/CustomStyle';


const Message = ({ alert, color }) => {
   return (
      alert !== null && (
         <View style={{ backgroundColor: color, padding: 11 }}>
            <Text style={[CustomStyle.textAlignCenter, { color: 'white', fontSize: 16, fontFamily: 'RobotoRegular' }]}>{alert}</Text>
         </View>
      )
   )
}


export default Message