import React from 'react';
import { StyleSheet, Text, View , Image } from 'react-native';
import { StackNavigator , createBottomTabNavigator} from 'react-navigation';

import { Map } from './app/components/map'
import { CardShop } from './app/components/cardShop'
import { Order } from './app/components/delivery'
import { SignIn } from './app/components/Sign-in'
import { SignUp } from './app/components/Sign-up'
import { Home } from './app/components/Home'
import { Profil } from './app/components/Profil'


//
// const RootStack = StackNavigator(
//   {
//     Home: {
//       screen: Home,
//     },
//     SignIn: {
//       screen: SignIn,
//     },
//     SignUp: {
//       screen: SignUp,
//     },
//     MapPharmacie: {
//       screen: MapPharmacie,
//     },
//     RootBottomStack : RootBottomStack
//   },
//   {
//     initialRouteName: 'Home',
//   }
//
// );
const RootBottomStack = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        // tabBarVisible: true ,
        header : { HeaderProps :null } ,
        headerBackImage: require('./app/assets/img/Facebook_Login_Button.png')
      }
    },
    Map: {
      screen: Map,
      navigationOptions: () => ({
          tabBarIcon: ({tintColor}) => (
              <Image style={ styles.ImageIconStyle}
                  source={require('./app/assets/img/map.png')}
              />
          )
      })
    },
    CardShop: {
      screen: CardShop,
      navigationOptions: () => ({
          tabBarIcon: ({tintColor}) => (
              <Image style={ styles.ImageIconStyle}
                  source={require('./app/assets/img/cart.png')}
              />
          )
      })
    },
    Order: {
      screen: Order,
      navigationOptions: () => ({
          tabBarIcon: ({tintColor}) => (
              <Image style={ styles.ImageIconStyle}
                  source={require('./app/assets/img/box.png')}
              />
          )
      })
    },
    Profil: {
       screen: Profil,
       navigationOptions: () => ({
           tabBarIcon: ({tintColor}) => (
               <Image style={ styles.ImageIconStyle}
                   source={require('./app/assets/img/man.png')}
               />
           )
       })
    },
   SignIn: {
      screen: SignIn,
      navigationOptions: { tabBarVisible: false  }
   },
    SignUp: {
      screen: SignUp,
      navigationOptions: { tabBarVisible: false  }
   },

  }

 );

export default class App extends React.Component {
  render() {
    return (

      <View style = { styles.MainContainer }>

         <RootBottomStack />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer:
  {
      flex: 1,

      // paddingTop: ( Platform.OS === 'ios' ) ? 20 : 0
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ImageIconStyle: {
     padding: 10,
     margin: 5,
     height: 25,
     width: 25,
     resizeMode : 'stretch',

  }
});
