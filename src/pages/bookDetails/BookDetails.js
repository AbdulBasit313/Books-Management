import React, { Fragment } from 'react'
import { Text, View } from 'react-native'
import ContentCard from '../../uiComponents/contentCard/ContentCard';


const BookDetails = (props) => {
   // console.log('details', this.props.navigation.state.params.lib)
   const { id, title, author, date, publisher, genre } = props.navigation.state.params.lib
   return (
      <Fragment>
         <ContentCard>
            <Text>Title: {title}</Text>
         </ContentCard>
         <ContentCard>
            <Text>Author: {author}</Text>
         </ContentCard>
         <ContentCard>
            <Text>Publisher: {publisher}</Text>
         </ContentCard>
         <ContentCard>
            <Text>Genre:{genre}</Text>
         </ContentCard>
         <ContentCard>
            <Text>Purchasing Date: {date}</Text>
         </ContentCard>
      </Fragment>
   )
}


export default BookDetails