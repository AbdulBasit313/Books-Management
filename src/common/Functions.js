class Functions {

   // colors
   primaryColor = '#26ABD4'
   secondaryColor = '#fff'
   inputBackground = '#F3F5FF'
   darkColor = '#333333'
   lightColor = '#f4f4f4'
   dangerColor = '#ff9478'
   successColor = '#26c281'

   // Social Icon Colors
   twitterBlue = '#1DA1F2'
   facebookBlue = '#4267B2'
   linkedInBlue = '#0077B5'
   devBlack = '#232222'
   githubBlack = '#24292E'

   // Header Styling
   header = {
      headerStyle: {
         backgroundColor: this.primaryColor,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
         flex: 1,
         textAlign: 'center',
         fontFamily: 'Literata',
         fontWeight: '400'
      },
      headerTitleContainerStyle: {
         left: 0
      },
   }
}

export default new Functions()