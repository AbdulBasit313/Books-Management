import React from 'react'
import {Text} from 'react-native'
import { createStackNavigator } from 'react-navigation'
import Dashboard from '../../pages/dashboard/Dashboard';
import AddBook from '../../pages/addBook/AddBook';
import BookDetails from '../../pages/bookDetails/BookDetails';
import Functions from '../../common/Functions';


export const DashboardStack = createStackNavigator({
   Home: {
      screen: Dashboard,
      navigationOptions:{
         headerTitle:'Dashboard'
      }
   },
   AddBook: {
      screen: AddBook,
      navigationOptions:{
         headerTitle:'Add Book'
      }
   },
   BookDetails: {
      screen: BookDetails,
      navigationOptions:{
         headerTitle:'Details'
      }
   }
},
   {
      defaultNavigationOptions: {
         ...Functions.header
      }
   }
)