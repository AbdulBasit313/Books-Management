import React, { Component } from 'react'
import { Text, View, TouchableOpacity, FlatList, Button, ScrollView } from 'react-native'
import DashboardStyle from './DashboardStyle';
import data from '../../data/data.json'
import AddButton from '../../uiComponents/addButton/AddButton';
import Swipeout from 'react-native-swipeout';
import Functions from '../../common/Functions';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Message from '../../uiComponents/message/Message';


class Dashboard extends Component {
   constructor(props) {
      super(props)
      this.state = {
         books: data,
         alert: null,
         color: null
      }
   }

   deleteItem = (id) => {
      const del = this.state.books.filter((item, index) => item.id != id)
      this.setState({ books: del })
      this.showAlert('Deleted', Functions.dangerColor)
   }

   onSaveBook = (newBook) => {
      this.setState({
         books: [...this.state.books, newBook],
      })
      this.showAlert('Added Book', Functions.successColor)
   }

   showAlert = (msg, type) => {
      this.setState({ alert: msg, color: type })

      setTimeout(() => this.setState({ alert: null }), 1500)
   }

   keyExtractor = (item) => item.id.toString()

   renderItem = ({ item }) => {
      const { navigate } = this.props.navigation
      return (
         <Swipeout
            style={DashboardStyle.flatlistItemContainer}
            right={[
               {
                  text: <Icon name="delete-sweep" size={30} color='white' />,
                  onPress: () => this.deleteItem(item.id),
                  backgroundColor: Functions.dangerColor
               }
            ]}
            backgroundColor='fff'
         >
            <TouchableOpacity
               activeOpacity={0.8}
               onPress={() => navigate('BookDetails', {
                  lib: item
               })}>
               <View style={DashboardStyle.textView}>
                  <Text style={DashboardStyle.flatBookText}>{item.title}</Text>
                  <Text style={DashboardStyle.flatAuthorText}>{item.author}</Text>
               </View>
            </TouchableOpacity>
         </Swipeout>
      )
   }

   render() {
      // console.log('data', data)
      const { books, alert, color } = this.state
      const { navigate } = this.props.navigation
      return (
         <View style={DashboardStyle.dashboardContainer}>
            <FlatList
               data={books}
               keyExtractor={this.keyExtractor}
               renderItem={this.renderItem}
            />
            <AddButton
               onPress={() => navigate('AddBook', {
                  func: this.onSaveBook
               })}
               style={DashboardStyle.addButtonStyle}
            />
            <Message alert={alert} color={color} />
         </View>
      )
   }
}


export default Dashboard
