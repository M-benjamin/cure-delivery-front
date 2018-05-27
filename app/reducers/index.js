import update from "react-addons-update";

var defaultState = {};

export default function(state = defaultState, action) {
  console.log("reducers --------------");
  switch (action.type) {
    default:
      return state;
  }
}
