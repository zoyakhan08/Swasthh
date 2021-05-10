import { createSwitchNavigator } from 'react-navigation'
import WelcomeScreen from '../screens/WelcomeScreen';
import ResetPassword  from '../screens/ResetPassword';

export const AppStackNavigator = createSwitchNavigator({
  WelcomeScreen:{
    screen: WelcomeScreen,
  },
  ResetPassword : {
    screen : ResetPassword,
  }
}
);
