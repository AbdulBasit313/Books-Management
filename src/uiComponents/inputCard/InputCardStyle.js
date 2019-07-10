import { StyleSheet } from 'react-native'
import Functions from '../../common/Functions';

export default InputCardStyle = StyleSheet.create({
   InputCardContainer: {
      borderColor: '#ccc',
      borderWidth: 1,
      margin: 8
   },
   cardTitle: {
      fontSize: 16,
      fontFamily: 'Literata',
      padding: 8,
      borderBottomColor: '#ccc',
      borderBottomWidth: 1,
      backgroundColor: Functions.inputBackground
   },
   cardInput: {
      fontFamily: 'Roboto-Regular',
      padding: 7
   }
})