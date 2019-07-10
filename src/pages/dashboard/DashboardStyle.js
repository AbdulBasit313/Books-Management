import { StyleSheet } from 'react-native'

export default DashboardStyle = StyleSheet.create({
   dashboardContainer: {
      flex: 1,
      position: 'relative',
   },
   flatlistItemContainer: {
      backgroundColor: '#fff',
      shadowOpacity: 0.4,
      shadowOffset: { width: 10, height: 10 },
      shadowRadius: 2,
      elevation: 1,
      shadowColor: 'blue',
      borderLeftWidth: 0,
      borderTopWidth: 0,
      // borderWidth: 2,
      margin: 5,
      borderRadius: 3,
   },
   textView: {
      padding: 10,
   },
   flatBookText: {
      fontFamily: 'Roboto-Regular',
      fontSize: 18,
      // color: '#4d4d4d',
      color: '#535352',
   },
   flatAuthorText: {
      fontFamily: 'Literata',
      fontSize: 14,
      marginTop: 5
      // color: '#4d4d4d',
   },
   addButtonStyle: {
      position: 'absolute',
      bottom: 15,
      right: 15,
      zIndex: 1
   }
})