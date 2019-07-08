import React, { Component } from 'react'
import { Text, View, TouchableOpacity, FlatList, Button, ScrollView } from 'react-native'
import DashboardStyle from './DashboardStyle';
import data from '../../data/data.json'
import AddButton from '../../uiComponents/addButton/AddButton';

class Dashboard extends Component {
   constructor(props) {
      super(props)
      this.state = {
         books: data
      }
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
         <TouchableOpacity style={DashboardStyle.flatlistItemContainer}
            onPress={() => navigate('BookDetails', {
               lib: item
            })}>
            <Text style={DashboardStyle.flatBookText}>{item.title}</Text>
            <Text style={DashboardStyle.flatAuthorText}>{item.author}</Text>
         </TouchableOpacity>
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
               style={{ position: 'absolute', bottom: 15, right: 15, zIndex: 1 }}
            />
         </View>
      )
   }
}


export default Dashboard
