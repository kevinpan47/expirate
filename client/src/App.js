import './App.css';
import GoogleLogin from 'react-google-login';
import React from 'react';
import FoodProgress from './components/Food/foodProgress';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <GoogleLogin
          clientId="979224664250-cv9l23uv6pbu88iq6gomg2o154702cbv.apps.googleusercontent.com"
          buttonText="Login"
          cookiePolicy={'single_host_origin'}
        />
        <FoodProgress
          name={"Kimchi"}
          buyDate={"10/2/21"}
          useDate={"12/21/21"}
          progress={75}
        />
      </header>
    </div>
  );
}

export default App;
