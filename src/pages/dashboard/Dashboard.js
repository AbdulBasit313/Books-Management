import React, { Component } from 'react'
import { Text, View, TouchableOpacity, FlatList, Button, ScrollView } from 'react-native'
import DashboardStyle from './DashboardStyle';

class Dashboard extends Component {
   constructor(props) {
      super(props)
      this.state = {
         books: [
            { id: 1, title: '40 Rules of love', author: 'Elif Shafak' },
            { id: 2, title: 'The 5 am club', author: 'Robin Sharma' },
            { id: 3, title: 'The 5  Love Languges', author: 'Gary Chapman' },
            { id: 4, title: 'Attituede is everything', author: 'Jeff Keller' },
            { id: 5, title: '40 Rules of love', author: 'Elif Shafak' },
            { id: 6, title: 'The 5 am club', author: 'Robin Sharma' },
            { id: 7, title: 'The 5  Love Languges', author: 'Gary Chapman' },
            { id: 8, title: 'Attituede is everything', author: 'Jeff Keller' },
            { id: 9, title: '40 Rules of love', author: 'Elif Shafak' },
            { id: 10, title: 'The 5 am club', author: 'Robin Sharma' },
            { id: 11, title: 'The 5  Love Languges', author: 'Gary Chapman' },
            { id: 12, title: 'Attituede is everything', author: 'Jeff Keller' },
         ]
      }
   }

   onSaveBook = (newBook) => {
      this.setState({
         books: [...this.state.books, newBook]
      })
   }

   keyExtractor = (item) => item.id.toString()

   renderItem = ({ item }) => {
      return (
         <TouchableOpacity style={DashboardStyle.flatlistItemContainer} onPress={() => this.props.navigation.navigate('BookDetails')}>
            <Text style={DashboardStyle.flatBookText}>{item.title}</Text>
            <Text style={DashboardStyle.flatAuthorText}>{item.author}</Text>
         </TouchableOpacity>
      )
   }

   render() {
      // console.log('state', this.state)
      const { navigate } = this.props.navigation
      return (
         <ScrollView>
            <View style={DashboardStyle.dashboardContainer}>
               <FlatList
                  data={this.state.books}
                  keyExtractor={this.keyExtractor}
                  renderItem={this.renderItem}
               />
               <Button
                  onPress={() => navigate('AddBook', {
                     func: this.onSaveBook
                  })}
                  title="New Book"
                  color="green"
                  style={{ position: 'absolute', bottom: 10, zIndex: 1 }}
               />
            </View>
         </ScrollView>
      )
   }
}


export default Dashboard
