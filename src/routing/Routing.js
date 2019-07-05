import { createDrawerNavigator, createAppContainer } from 'react-navigation'
import About from '../pages/about/About';
import { DashboardStack } from './stack';


export const Drawer = createDrawerNavigator({
   Dashboard: {
      screen: DashboardStack
   },
   About: {
      screen: About
   }
})


export const Root = createAppContainer(Drawer)