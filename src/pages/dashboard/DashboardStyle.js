import { StyleSheet } from 'react-native'

export default DashboardStyle = StyleSheet.create({
   dashboardContainer: {
      flex: 1,
      position: 'relative',
   },
   flatlistItemContainer: {
      backgroundColor: '#fff',
      shadowOpacity: 0.8,
      shadowOffset: { width: 10, height: 10 },
      shadowRadius: 2,
      elevation: 2,
      shadowColor: 'blue',
      borderLeftWidth: 0,
      borderTopWidth: 0,
      // borderWidth: 2,
      margin: 5,
      borderRadius: 3,
   },
   flatBookText: {
      fontSize: 20,
      padding: 5,
      fontWeight: 'bold',
      color: '#4d4d4d'
   },
   flatAuthorText: {
      fontSize: 14,
      padding: 5,
      fontWeight: 'bold',
      color: '#81cfe0'
   }
})