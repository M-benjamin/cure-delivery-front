import React from 'react';
import { View , Text , TouchableOpacity , TextInput, StyleSheet} from 'react-native';

import { StackNavigator } from 'react-navigation';

export class SignIn extends React.Component {
    constructor(props) {
      super(props);
      this.state = { email: ' your email', password : '' };
    }

    render(){

      return (
          <View>
            <Text>E-mail</Text>
            <TextInput
              style={{height: 40, borderColor: 'gray', borderWidth: 1}}
              onChangeText={(email) => this.setState({email})}
              value={this.state.email}
            />
            <Text>Password</Text>
            <TextInput
              style={{height: 40, borderColor: 'gray', borderWidth: 1}}
              onChangeText={(password) => this.setState({password})}
              value={this.state.password}
              secureTextEntry={true}
            />
            <TouchableOpacity
              style={styles.ButtonStyle}
            >

               <Text > Login  </Text>

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
   margin: 10
 },



TextStyle :{

  color: "#fff",
  marginBottom : 4,
  marginRight :20,

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

}

});
