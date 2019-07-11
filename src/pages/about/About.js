import React, { Fragment } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import ContentCard from '../../uiComponents/contentCard/ContentCard';
import Icon from 'react-native-vector-icons/AntDesign'
import DevIcon from 'react-native-vector-icons/FontAwesome5'
import Functions from '../../common/Functions';
import CustomStyle from '../../common/CustomStyle'


const About = () => {
   return (
      <Fragment>
         <ContentCard>
            <Text style={[CustomStyle.textAlignCenter, { color: 'blue', fontFamily: 'Literata' }]}>Follow Me On</Text>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', marginTop: 20 }}>
               <TouchableOpacity>
                  <Icon name="twitter" size={30} color={Functions.twitterBlue} />
               </TouchableOpacity>
               <TouchableOpacity>
                  <Icon name="github" size={30} color={Functions.githubBlack} />
               </TouchableOpacity>
               <TouchableOpacity>
                  <Icon name="linkedin-square" size={30} color={Functions.linkedInBlue} />
               </TouchableOpacity>
               <TouchableOpacity>
                  <DevIcon name="dev" size={30} color={Functions.devBlack} />
               </TouchableOpacity>
            </View>
         </ContentCard>
         <ContentCard>
            <Text style={[CustomStyle.textAlignCenter, { fontFamily: 'Literata', fontSize: 18, color: '#535352' }]}>Version: 0.5</Text>
         </ContentCard>
      </Fragment >
   )
}


export default About