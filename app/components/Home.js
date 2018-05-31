import React from 'react';
import { StyleSheet, View , Text , TouchableOpacity , Image } from 'react-native';

import { StackNavigator } from 'react-navigation';

export  class Home extends React.Component {


    render(){

      return (

        <View style={styles.MainContainer}>
        <Image   style={ styles.ImageLogoStyle}
         source={require('../assets/img/logo.png')}
         style={styles.ImageIconStyle}
         />
        // ******* Button facebook ******
          <TouchableOpacity
            style={styles.FacebookStyle}
            activeOpacity={0.5}
            >

             <Image
              source={require('../assets/img/Facebook_Login_Button.png')}
              style={styles.ImageIconStyle}
              />

             <View style={styles.SeparatorLine} />

             <Text style={styles.TextStyle}> Login with Facebook </Text>

           </TouchableOpacity>

           // ******* Button Google ******
           <TouchableOpacity style={styles.GooglePlusStyle} activeOpacity={0.5}>

              <Image
               source={require('../assets/img/Google_Plus.png')}
               style={styles.ImageIconStyle}
               />

              <View style={styles.SeparatorLine} />

              <Text style={styles.TextStyle}> Login with Google  </Text>

            </TouchableOpacity>


            // ******* Button Sign in ******
            <TouchableOpacity
              style={styles.ButtonStyle}
              onPress={() => this.props.navigation.navigate('SignIn')}
              >

               <Text style={styles.TextStyle}> Sign in  </Text>

             </TouchableOpacity>
             // ******* Button Sign up  ******
             <TouchableOpacity
              style={styles.ButtonStyle}
              onPress={() => this.props.navigation.navigate('SignUp')}
              >

                <Text style={styles.TextStyle}> Sign up </Text>

              </TouchableOpacity>

        </View>

      )
    }

}
const styles = StyleSheet.create({

 MainContainer: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
   // backgroundColor: 'steelblue'
   // margin: 10
 },

 GooglePlusStyle: {
   flexDirection: 'row',
   alignItems: 'center',
   backgroundColor: '#dc4e41',
   borderWidth: .5,
   borderColor: '#fff',
   height: 40,
   borderRadius: 5 ,
   margin: 5,

},

FacebookStyle: {
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: '#485a96',
  borderWidth: .5,
  borderColor: '#fff',
  height: 40,
  borderRadius: 5 ,
  margin: 5,

},
ButtonStyle: {
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: '#808080',
  // borderWidth: .5,
  borderColor: '#fff',
  height: 40,
  borderRadius: 5 ,
  margin: 5,

},
ImageLogoStyle: {
   padding: 10,
   margin: 5,
   height: 150,
   width: 150,
   resizeMode : 'stretch',
},
ImageIconStyle: {
   padding: 10,
   margin: 5,
   height: 25,
   width: 25,
   resizeMode : 'stretch',

},

TextStyle :{

  color: "#fff",
  marginBottom : 4,
  marginRight :20,

},

SeparatorLine :{

backgroundColor : '#fff',
width: 1,
height: 40

}

});
