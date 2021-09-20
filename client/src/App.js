import './App.css';
import GoogleLogin, { GoogleLogout } from 'react-google-login';
import React, {useState, useMemo} from 'react';
import FoodProgress from './components/Food/foodProgress';
import { AuthContext } from './authContext';
import {useHistory} from 'react-router-dom';

function App() {

  const history = useHistory();
  const [user, setUser] = useState(null);
  const value = useMemo(() => ({user, setUser}), [user, setUser]);

  const logout = () => {
    window.location.reload();
  }

  const responseGoogle = (response) => {
    console.log(response);
    setUser(response.googleId);
  }

  return (
    <div className="App">
      <header className="App-header">
        {user ? (
          <GoogleLogout
          clientId="979224664250-cv9l23uv6pbu88iq6gomg2o154702cbv.apps.googleusercontent.com"
          buttonText="Logout"
          onLogoutSuccess={logout}
          />
        ):(
          <GoogleLogin
          clientId="979224664250-cv9l23uv6pbu88iq6gomg2o154702cbv.apps.googleusercontent.com"
          buttonText="Login"
          cookiePolicy={'single_host_origin'}
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          isSignedIn={true}
        />
        )}
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
