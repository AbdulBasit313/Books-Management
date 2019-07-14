import { StyleSheet } from 'react-native'
import Functions from '../../common/Functions';

export default DateCardStyle = StyleSheet.create({
   DateCardContainer: {
      borderColor: '#ccc',
      borderWidth: 1,
      margin: 8
   },
   cardTitle: {
      fontSize: 16,
      fontFamily: 'Literata',
      fontWeight: '400',
      padding: 8,
      borderBottomColor: '#ccc',
      borderBottomWidth: 1,
      backgroundColor: Functions.inputBackground
   },
   cardInput: {
      fontFamily: 'Roboto-Regular',
      padding: 7
   },
   dateTextStyle: {
      color: 'rgba(0,0,0,0.4)'
   }
})