import React, { Component } from 'react'
import { Text, View, Button, ScrollView, TouchableOpacity } from 'react-native'
import InputCard from '../../uiComponents/inputCard/InputCard';
import DateTimePicker from "react-native-modal-datetime-picker"
import DateCard from '../../uiComponents/dateCard/DateCard';


class AddBook extends Component {
   constructor(props) {
      super(props)
      this.state = {
         title: '',
         author: '',
         date: null,
         publisher: '',
         genre: '',
         isDateTimePickerVisible: false
      }
   }

   showDateTimePicker = () => {
      this.setState({ isDateTimePickerVisible: true });
   }

   hideDateTimePicker = () => {
      this.setState({ isDateTimePickerVisible: false });
   }

   handleDatePicked = date => {
      console.log("A date has been picked: ", date);
      this.setState({ date: date.toString() })
      this.hideDateTimePicker();
   }

   onChangeBook(text) {
      this.setState({ title: text })
   }

   onChangeAuthor(text) {
      this.setState({ author: text })
   }

   onChangePublisher(text) {
      this.setState({ publisher: text })
   }

   onChangeGenre(text) {
      this.setState({ genre: text })
   }

   onSubmit = () => {
      const book = { ...this.state, id: Math.random() }
      this.props.navigation.state.params.func(book)
      this.props.navigation.goBack()
      alert('Added Book')
   }

   render() {
      // console.log('add book', this.props.navigation.state.params.func)
      return (
         <View>
            <ScrollView>
               <View>
                  <InputCard
                     fieldName='Title'
                     placeholder='title'
                     onChangeText={(text) => this.onChangeBook(text)}
                  />
               </View>
               <View>
                  <InputCard
                     fieldName='Author'
                     placeholder='author'
                     onChangeText={(text) => this.onChangeAuthor(text)}
                  />
               </View>
               <View>
                  <DateCard
                     fieldName='Purchase Date'
                     placeholder='date'
                     date={this.state.date}
                     onPress={this.showDateTimePicker}
                  />
                  <DateTimePicker
                     isVisible={this.state.isDateTimePickerVisible}
                     onConfirm={this.handleDatePicked}
                     onCancel={this.hideDateTimePicker}
                  />
               </View>
               <View>
                  <InputCard
                     fieldName='Publisher'
                     placeholder='publisher'
                     onChangeText={(text) => this.onChangePublisher(text)}
                  />
               </View>
               <View>
                  <InputCard
                     fieldName='Genre'
                     placeholder='genre'
                     onChangeText={(text) => this.onChangeGenre(text)}
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
