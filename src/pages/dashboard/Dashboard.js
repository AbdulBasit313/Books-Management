import React, { Component } from 'react'
import { Text, View, TouchableOpacity, FlatList, Button, ScrollView } from 'react-native'
import DashboardStyle from './DashboardStyle';
import data from '../../data/data.json'
import AddButton from '../../uiComponents/addButton/AddButton';
import Swipeout from 'react-native-swipeout';


class Dashboard extends Component {
   static navigationOptions = {
      headerTitleStyle: {
         textAlign: 'center',
         flex: 1,
         color: 'white'
      },
      headerTitle: 'Dashboard'
   }
   constructor(props) {
      super(props)
      this.state = {
         books: data
      }
   }

   deleteItem = (id) => {
      const del = this.state.books.filter((item, index) => item.id != id)
      this.setState({ books: del })
   }

   onSaveBook = (newBook) => {
      this.setState({
         books: [...this.state.books, newBook]
      })
   }

   keyExtractor = (item) => item.id.toString()

   renderItem = ({ item }) => {
      const { navigate } = this.props.navigation
      return (
         <Swipeout
            style={DashboardStyle.flatlistItemContainer}
            right={[
               { text: 'Edit', onPress: () => alert('hello') },
               { text: 'Delete', onPress: () => this.deleteItem(item.id) }
            ]}
            backgroundColor='fff'
         >
            <TouchableOpacity
               onPress={() => navigate('BookDetails', {
                  lib: item
               })}>
               <Text style={DashboardStyle.flatBookText}>{item.title}</Text>
               <Text style={DashboardStyle.flatAuthorText}>{item.author}</Text>
            </TouchableOpacity >
         </Swipeout >

      )
   }

   render() {
      // console.log('data', data)
      const { navigate } = this.props.navigation
      return (
         <View style={DashboardStyle.dashboardContainer}>
            <FlatList
               data={this.state.books}
               keyExtractor={this.keyExtractor}
               renderItem={this.renderItem}
            />
            <AddButton
               onPress={() => navigate('AddBook', {
                  func: this.onSaveBook
               })}
               style={DashboardStyle.addButtonStyle}
            />
         </View>
      )
   }
}


export default Dashboard
