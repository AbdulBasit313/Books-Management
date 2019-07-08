import React, { Component } from 'react'
import { Text, View } from 'react-native'

const BookDetails = (props) => {
   // console.log('details', this.props.navigation.state.params.lib)
   const { id, title, author, date, publisher, genre } = props.navigation.state.params.lib
   return (
      <View>
         <Text>Book Details</Text>
         <Text>Title: {title}</Text>
         <Text>Author: {author}</Text>
         <Text>Publisher: {publisher}</Text>
         <Text>Purchasing Date: {date}</Text>
         <Text>Genre:{genre}</Text>
      </View>
   )
}


export default BookDetails