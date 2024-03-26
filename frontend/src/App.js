import HomePage from "./HomePage"
import React from "react"
import LoginPage from "./LoginPage"
import './App.css';



function App() {

  const [check,checking] = React.useState(true)

  return (
      <div>
        {
          check ? (<LoginPage />):(<HomePage />)
        }
      </div>
  );
}

export default App;
