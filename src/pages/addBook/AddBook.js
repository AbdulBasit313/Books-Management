import React, { Component } from 'react'
import { Text, View, Button, ScrollView } from 'react-native'
import InputCard from '../../uiComponents/inputCard/InputCard';
import DateTimePicker from "react-native-modal-datetime-picker"
import DateCard from '../../uiComponents/dateCard/DateCard';
import SubmitButton from '../../uiComponents/submitButton/SubmitButton';


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
      console.log("A date has been picked: ", date)
      const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "October", "Nov", "Dec"];
      const selectedDate = `${date.getDate()}-${month[date.getMonth()]}-${date.getFullYear()}`
      this.setState({ date: selectedDate })
      this.hideDateTimePicker();
   }

   onSubmit = () => {
      let notEmpty = this.state.title.trim().length > 0;
      if (!notEmpty) {
         alert('Title can\'t be empty')
      }
      else {
         const book = { ...this.state, id: Math.random() }
         this.props.navigation.state.params.func(book)
         this.props.navigation.goBack()
      }
   }

   render() {
      // console.log('add book', this.props.navigation.state.params.func)
      return (
         <View style={{ flex: 1, position: 'relative' }}>
            <ScrollView>
               <View>
                  <InputCard
                     fieldName='Title'
                     placeholder='title'
                     onChangeText={(text) => this.setState({ title: text })}
                  />
               </View>
               <View>
                  <InputCard
                     fieldName='Author'
                     placeholder='author'
                     onChangeText={(text) => this.setState({ author: text })}
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
                     onChangeText={(text) => this.setState({ publisher: text })}
                  />
               </View>
               <View>
                  <InputCard
                     fieldName='Genre'
                     placeholder='genre'
                     onChangeText={(text) => this.setState({ genre: text })}
                  />
               </View>
            </ScrollView>
            <SubmitButton onPress={this.onSubmit} style={{ position: 'absolute', bottom: 0, zIndex: 1 }} />
         </View>
      )
   }
}


export default AddBook
