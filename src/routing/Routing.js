import { createDrawerNavigator, createAppContainer } from 'react-navigation'
import { DashboardStack, AboutStack } from './stack';
import DrawerItems from './drawerItems/DrawerItems';


export const Drawer = createDrawerNavigator({
   Dashboard: {
      screen: DashboardStack
   },
   About: {
      screen: AboutStack
   }
}, {
      contentComponent: DrawerItems,
      drawerPosition: 'left'
   })


export const Root = createAppContainer(Drawer)