import { createStore, compose, applyMiddleware } from "redux";
import reducer from "../reducers";
import { AsyncStorage } from "react-native";
import { persistStore, persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  storage: AsyncStorage
};

let defaultState = {};

const persistedReducer = persistReducer(persistConfig, reducer);

export function configureStore(state = defaultState) {
  let store = createStore(reducer, state, compose(persistedReducer()));
  let persistor = persistStore(store);
  return { store, persistor };
}
