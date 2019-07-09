import { createStackNavigator } from 'react-navigation'
import Dashboard from '../../pages/dashboard/Dashboard';
import AddBook from '../../pages/addBook/AddBook';
import BookDetails from '../../pages/bookDetails/BookDetails';
import Functions from '../../common/Functions';


export const DashboardStack = createStackNavigator({
   Home: {
      screen: Dashboard
   },
   AddBook: {
      screen: AddBook
   },
   BookDetails: {
      screen: BookDetails
   }
},
   {
      defaultNavigationOptions: {
         ...Functions.header
      }
   }
)