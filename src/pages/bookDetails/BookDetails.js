import React, { Fragment } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import ContentCard from '../../uiComponents/contentCard/ContentCard';


const BookDetails = (props) => {
   // console.log('details', this.props.navigation.state.params.lib)
   const { id, title, author, date, publisher, genre } = props.navigation.state.params.lib
   return (
      <Fragment>
         <ContentCard>
            <Text style={BookDetailsStyle.textStyle}>Title: {title}</Text>
         </ContentCard>
         <ContentCard>
            {author ? <Text style={BookDetailsStyle.textStyle}>Author: {author}</Text> : <Text>Author: Author not specified</Text>}
         </ContentCard>
         <ContentCard>
            {publisher ? <Text style={BookDetailsStyle.textStyle}>Publisher: {publisher}</Text> : <Text>Publisher: Publisher not specified</Text>}
         </ContentCard>
         <ContentCard>
            {genre ? <Text style={BookDetailsStyle.textStyle}>Genre: {genre}</Text> : <Text>Genre: Genre not specified</Text>}
         </ContentCard>
         <ContentCard>
            {date ? <Text style={BookDetailsStyle.textStyle}>Purchased On: {date}</Text> : <Text>Purchased On: Purchased date not specified</Text>}
         </ContentCard>
      </Fragment>
   )
}

const BookDetailsStyle = StyleSheet.create({
   textStyle: {
      color: '#535352',
      fontSize: 18,
      fontFamily: 'Literata Italic'
   }
})

export default BookDetails