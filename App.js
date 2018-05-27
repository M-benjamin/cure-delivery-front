import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { StackNavigator } from "react-navigation";
import { Provider } from "react-redux";
import { configureStore } from "./app/store";
const { persistor, store } = configureStore();
import { PersistGate } from "redux-persist/integration/react";

import { Home } from "./app/components/Home";
import SignIn from "./app/components/Sign-in";
import { SignUp } from "./app/components/Sign-up";

// const RootStack = StackNavigator(
//   {
//     Home: {
//       screen: Home
//     },
//     SignIn: {
//       screen: SignIn
//     },
//     SignUp: {
//       screen: SignUp
//     }
//   },
//   {
//     initialRouteName: "Home"
//   }
// );

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Home />
        </PersistGate>
      </Provider>
    );
  }
}
