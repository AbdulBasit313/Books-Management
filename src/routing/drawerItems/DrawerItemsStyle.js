import { StyleSheet } from 'react-native'
import Functions from '../../common/Functions';


export default DrawerItemsStyle = StyleSheet.create({
   drawerStyle: {
      flex: 1,
      backgroundColor: Functions.secondaryColor
   },
   drawerList: {
      //FlatList style
   },
   drawerItem: {
      flex: 1,
      flexDirection: "row",
      margin: 5,
      marginTop: 7,
      marginLeft: 15
   },
   drawerItemIcon: {
      // icon style
   },
   drawerItemText: {
      color: 'white',
      fontSize: 18,
      fontFamily: 'Literata',
      marginLeft: 7
   },
})