import React, { Component } from 'react'
import { Text, View, TouchableOpacity, FlatList } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import DrawerItemsStyle from './DrawerItemsStyle';


class DrawerItems extends Component {
   constructor(props) {
      super(props)
      this.state = {
         routes: [
            { id: 1, name: 'Dashboard', routeName: 'Dashboard', icon: 'dashboard' },
            { id: 2, name: 'About', routeName: 'About', icon: 'info' },
         ]
      }
   }

   keyExtractor = (item) => item.id.toString()

   navigateScreen(routeName) {
      const { navigate } = this.props.navigation
      navigate(routeName)
   }

   renderItem({ item, index }) {
      const { navigation } = this.props
      const { state } = navigation
      return (
         <TouchableOpacity
            style={DrawerItemsStyle.drawerItem}
            // key={index}
            onPress={() => this.navigateScreen(item.routeName)}
            activeOpacity={0.6}
         >
            <Icon
               name={item.icon} size={24} color='white'
            />
            <Text style={DrawerItemsStyle.drawerItemText}>{item.routeName}</Text>
         </TouchableOpacity>
      )
   }

   render() {
      const { routes } = this.state
      return (
         <View style={DrawerItemsStyle.drawerStyle}>
            <FlatList
               data={routes}
               renderItem={this.renderItem.bind(this)}
               keyExtractor={this.keyExtractor}
            />
         </View>
      )
   }
}


export default DrawerItems