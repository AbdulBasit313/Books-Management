import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import Dashboard from '../../pages/dashboard/Dashboard';
import About from '../../pages/about/About'
import AddBook from '../../pages/addBook/AddBook';
import BookDetails from '../../pages/bookDetails/BookDetails';
import Functions from '../../common/Functions';
import Icon from 'react-native-vector-icons/Ionicons'
import BackIcon from 'react-native-vector-icons/AntDesign'
// import { Menu, BackButton } from './methods';


export const DashboardStack = createStackNavigator({
   Home: {
      screen: Dashboard,
      navigationOptions: ({ navigation }) => ({
         title: 'Dashboard',
         // headerLeft: <Menu />
         headerLeft: (
            <TouchableOpacity style={{ marginLeft: 13 }} onPress={() => navigation.openDrawer()} >
               <Icon name="md-menu" size={30} color='white' />
            </TouchableOpacity>
         )
      })
   },
   AddBook: {
      screen: AddBook,
      navigationOptions: ({ navigation }) => ({
         title: 'Add Book',
         // headerLeft: <BackButton />
         headerLeft: (
            <TouchableOpacity style={{ marginLeft: 13 }} onPress={() => navigation.goBack()} >
               <BackIcon name="back" size={24} color='white' />
            </TouchableOpacity>
         )
      })
   },
   BookDetails: {
      screen: BookDetails,
      navigationOptions: ({ navigation }) => ({
         title: 'Details',
         // headerLeft: <BackButton />
         headerLeft: (
            <TouchableOpacity style={{ marginLeft: 13 }} onPress={() => navigation.goBack()} >
               <BackIcon name="back" size={25} color='white' />
            </TouchableOpacity>
         )
      })
   }
},
   {
      defaultNavigationOptions: {
         ...Functions.header
      }
   }
)


export const AboutStack = createStackNavigator({
   Home: {
      screen: About,
      navigationOptions: {
         headerTitle: 'About'
      }
   }
},
   {
      defaultNavigationOptions: {
         ...Functions.header
      }
   }
)