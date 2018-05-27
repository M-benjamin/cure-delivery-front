// import React from "react";
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   TextInput,
//   StyleSheet
// } from "react-native";
// import { reduxForm } from "redux-form";
// import { StackNavigator } from "react-navigation";

// class SignIn extends React.Component {
//   // constructor(props) {
//   //   super(props);
//   //   this.state = { email: " your email", password: "" };
//   // }

//   render() {
//     // > Get input here
//     onSightIn: () => {};

//     let {
//       handleSubmit,
//       fields: { email, password }
//     } = this.props;

//     return (
//       <View>
//         <Text>E-mail</Text>
//         <TextInput
//           {...email}
//           style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
//           onChangeText={email => this.setState({ email })}
//           value={this.state.email}
//         />

//         <Text>Password</Text>
//         <TextInput
//           {...password}
//           style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
//           onChangeText={password => this.setState({ password })}
//           value={this.state.password}
//           secureTextEntry={true}
//         />

//         <TouchableOpacity
//           style={styles.ButtonStyle}
//           onPress={() => this.onSightIn}
//         >
//           <Text>Login</Text>
//         </TouchableOpacity>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   MainContainer: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     margin: 10
//   },

//   TextStyle: {
//     color: "#fff",
//     marginBottom: 4,
//     marginRight: 20
//   },
//   ButtonStyle: {
//     flexDirection: "row",
//     alignItems: "center",
//     backgroundColor: "#808080",
//     // borderWidth: .5,
//     borderColor: "#fff",
//     height: 40,
//     borderRadius: 5,
//     margin: 5
//   }
// });

// let validate = formProps => {
//   let errors = {};
//   return errors;
// };

// export default reduxForm(
//   {
//     form: "login",
//     fields: ["email", "password"],
//     validate: validate
//   },
//   null,
//   null
// )(SignIn);
