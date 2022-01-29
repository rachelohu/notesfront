import React, {useContext, useReducer} from "react"

//Initial state
const initialState = {
  url: "http://rh-notes.herokuapp.com",
  token: null,
  email: null,
  notes: null,
  new: {
    message: "",
  },
  edit: {
    id: 0,
    message: "",
  }
}

//Reducer
const reducer = (state, action) => {
  let newState;
  switch(action.type) {
    case "auth":
      newState = { ...state, ...action.payload };
      return newState;
      break;
    case "logout":
      newState = { ...state, token: null, email: null};
      window.localStorage.removeItem("auth")
      return newState
    case "getNotes":
      newState = {...state, notes: action.payload};
      return newState
      break
    case "select":
      newState = {...state, edit: action.payload};
      return newState
      break
    default: 
      return state;
      break;
  }
};

//App Context
const AppContext = React.createContext(null)

//App Component
export const AppState = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return<AppContext.Provider value={{state, dispatch}}>
    {props.children}
  </AppContext.Provider>

}

//UseAppState hook
export const useAppState = () => {
  return React.useContext(AppContext)
}
