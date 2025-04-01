import React from 'react';

function Greeting(){
  const hour = new Date().getHours();
                         //condition? true:false
  const greetingMessage = hour < 12 ? "Good Morning!":hour < 18 ? "Goof Afternoon!":"Good Evening!";

  return(
    <div>
      <h1>{greetingMessage}</h1>
      <p>Welcome to my online store!</p>
    </div>
  );
}


function App(){
  return(
    <div>
      <Greeting />
    </div>
  );
}

export default App;