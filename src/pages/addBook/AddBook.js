import React, { Component } from 'react'
import { Text, View, Button, ScrollView } from 'react-native'
import InputCard from '../../uiComponents/inputCard/InputCard';

class AddBook extends Component {
   constructor(props) {
      super(props)
      this.state = {
         title: '',
         author: ''
      }
   }

   onChangeBookName(text) {
      this.setState({
         title: text
      })
   }

   onChangeAuthorName(text) {
      this.setState({
         author: text
      })
   }

   onSubmit = () => {
      const book = { ...this.state, id: Math.random() }
      this.props.navigation.state.params.func(book)
   }

   render() {
      // console.log('add book', this.props.navigation.state.params.func)
      return (
         <View>
            <Text>Add New Book</Text>
            <ScrollView>
               <View>
                  <InputCard
                     filedName='Title'
                     placeholder='title'
                     onChangeText={(text) => this.onChangeBookName(text)}
                  />
               </View>
               <View>
                  <InputCard
                     filedName='Author'
                     placeholder='author'
                     onChangeText={(text) => this.onChangeAuthorName(text)}
                  />
               </View>
            </ScrollView>
            <Button
               onPress={this.onSubmit}
               title="Submit Book"
               color="#841584"
            />
         </View>
      )
   }
}


export default AddBook
