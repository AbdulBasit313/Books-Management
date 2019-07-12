import React, { Fragment } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, Linking } from 'react-native'
import ContentCard from '../../uiComponents/contentCard/ContentCard';
import Icon from 'react-native-vector-icons/AntDesign'
import DevIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import Functions from '../../common/Functions';
import CustomStyle from '../../common/CustomStyle'


const About = () => {
   return (
      <Fragment>
         <ContentCard>
            <Text style={[CustomStyle.textAlignCenter, { color: Functions.addButton, fontFamily: 'Roboto-Regular', fontSize: 16 }]}>Follow Me On</Text>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', marginTop: 20 }}>
               <TouchableOpacity
                  style={AboutStyle.card}
                  onPress={() => { Linking.openURL('https://twitter.com/Basit_Miyanji') }}
               >
                  <Icon name="twitter" size={26} color={Functions.twitterBlue} />
               </TouchableOpacity>
               <TouchableOpacity
                  style={AboutStyle.card}
                  onPress={() => { Linking.openURL('https://github.com/AbdulBasit313') }}
               >
                  <Icon name="github" size={26} color={Functions.githubBlack} />
               </TouchableOpacity>
               <TouchableOpacity
                  style={AboutStyle.card}
                  onPress={() => { Linking.openURL('https://www.linkedin.com/in/abdulbasitprofile/') }}
               >
                  <Icon name="linkedin-square" size={26} color={Functions.linkedInBlue} />
               </TouchableOpacity>
               <TouchableOpacity
                  style={AboutStyle.card}
                  onPress={() => { Linking.openURL('https://dev.to/abdulbasit313') }}
               >
                  <DevIcon name="dev-to" size={26} color={Functions.devBlack} />
               </TouchableOpacity>
            </View>
         </ContentCard>
         <ContentCard>
            <Text style={[CustomStyle.textAlignCenter, { fontFamily: 'Literata', fontSize: 18, color: '#535352' }]}>Version: 0.5</Text>
         </ContentCard>
      </Fragment >
   )
}

const AboutStyle = StyleSheet.create({
   card: {
      backgroundColor: 'white',
      borderRadius: 7,
      padding: 6,
      elevation: 2,
      // marginHorizontal: 20,
      // marginVertical: 8,
   }
})


export default About