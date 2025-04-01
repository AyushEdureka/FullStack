import React from "react";
//import AddToCartButton from "./AddToCartButton";
import UserProfile from "./UserProfile";

function App(){
  return(
    <div style={appStyles}>
      <h1>Welcome to My DashProfile</h1>
      {/* <AddToCartButton /> */}
      <UserProfile />
    </div>
  );
}

const appStyles ={
  textAlign:'center',
  marginTop:'5px'
};

export default App;