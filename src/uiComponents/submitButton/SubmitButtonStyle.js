import { StyleSheet } from 'react-native'
import Functions from '../../common/Functions';

export default SubmitButtonStyle = StyleSheet.create({
   buttonContainer: {
      backgroundColor: Functions.primaryColor
   },
   buttonStyle: {
      padding: 11.5,
      color: 'white',
      fontSize: 17,
      justifyContent: 'center',
      textAlign: 'center', fontFamily: 'Roboto-Regular',
      fontWeight: '400'
   }
})