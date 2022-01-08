import React, {useContext, useReducer} from "react"

//Initial state

const initialState = {
  url: "heroku",
  token: null,
  email: null
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
      newState = { ...state, token: null, user: null};
      window.localStorage.removeItem("auth")
      return newState
    default:
      return state
      break
  }
};

//App Context
const AppContext = React.createContext(null)

export const AppState = (props) => {

  const [state, dispatch] = useReducer(reducer, initialState)

  return<AppContext.Provider value={{state,dispatch}}>
    {props.children}
  </AppContext.Provider>

}

//UseAppState hook
export const useAppState = () => {
  return React.useContext(AppContext)
}
