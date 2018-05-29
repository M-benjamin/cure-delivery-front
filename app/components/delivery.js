import React from 'react';
import { View , Text , TouchableOpacity , TextInput, StyleSheet , Image} from 'react-native';

import { StackNavigator } from 'react-navigation';

export class Order extends React.Component {


    render(){

      return (
          <View >
            <View style={styles.MainContainer}>
              <Text>Please take a picture of your ordonnance</Text>
            </View>
            <View>
              <TextInput
                style={{top:20 , height: 40, borderColor: 'gray', borderWidth: 1}}
                // onChangeText={(text) => this.setState({text})}
                // value={this.state.text}
              />
            </View>
            <TouchableOpacity
              style={{
                  left: 125,
                  top: 30,
                  borderWidth:1,
                  borderColor:'rgba(0,0,0,0.2)',
                  alignItems:'center',
                  justifyContent:'center',
                  width:100,
                  height:100,
                  backgroundColor:'#fff',
                  borderRadius:100,
                }}
            >
            <Image source={require('../assets/img/photo-camera.png')}/>
            </TouchableOpacity>
          </View>


      )


}
}
const styles = StyleSheet.create({

 MainContainer: {
   // flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
   margin: 10,
   top: 20,
   height: 150,
   backgroundColor: 'steelblue'
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
