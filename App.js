import React from 'react';
import { createAppContainer, createSwitchNavigator} from 'react-navigation';
import WelcomeScreen from './screens/WelcomeScreen';
import { AppDrawerNavigator } from './components/AppDrawerNavigator';
import ResetPassword from './screens/ResetPassword';


export default function App() {
  return (
    <AppContainer/>
  );
}


const switchNavigator = createSwitchNavigator({
  WelcomeScreen:{screen: WelcomeScreen},
  ResetPassword : {screen : ResetPassword},
  Drawer:{screen: AppDrawerNavigator},
})

const AppContainer =  createAppContainer(switchNavigator);
