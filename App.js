import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import { Home } from './app/components/Home'
import { SignIn } from './app/components/Sign-in'
import { SignUp } from './app/components/Sign-up'


const RootStack = StackNavigator(
  {
    Home: {
      screen: Home,
    },
    SignIn: {
      screen: SignIn,
    },
    SignUp: {
      screen: SignUp,
    }
  },
  {
    initialRouteName: 'Home',
  }

);
export default class App extends React.Component {
  render() {
    return (

      <View style = { styles.MainContainer }>
         <RootStack />
         <View style={ styles.bottomView} >
          <Text style={styles.textStyle}>This is Bottom View.</Text>
         </View>

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
  bottomView:{
    width: '100%',
    height: 50,
    backgroundColor: '#FF9800',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0
  }
});
