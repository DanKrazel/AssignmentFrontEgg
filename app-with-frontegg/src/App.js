import React, {useState} from 'react';
import { useAuth, AdminPortal, useAuthActions, useLoginWithRedirect} from '@frontegg/react'

function App() {
  const { user, isAuthenticated } = useAuth();
  const [ refreshToken , setRefreshToken ] = useState("")
  const loginWithRedirect = useLoginWithRedirect();
  const { switchTenant } = useAuthActions();


  const logout = () => {
    window.location.href = 'https://app-or947vu8mzpj.frontegg.com/oauth/account/logout'
    console.log(user)
  }

  const handleSwitchTenant = () => { 
    switchTenant({ tenantId: user.tenantId });
  };

  const handleClick = () => {
    AdminPortal.show();
  };

  /*render() {
    let button;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }*/

  return (
    <div className="App">
      { isAuthenticated ? (
        <div>
          <div>
            <img src={user?.profilePictureUrl} alt={user?.name}/>
          </div>
          <div>
            <span>Logged in as: {user?.name}</span>
          </div>
          <div>
            <button onClick={() => alert(user.accessToken)}>What is my access token?</button>
          </div>
          <div>
            <button onClick={() => handleSwitchTenant()}>Select Active Tenant :{user.tenants[0].tenantId}</button>
          </div>
          <div>
            <button onClick={() => handleClick()}>Setting</button>
          </div>
          <div>
            <button onClick={() => logout()}>Logout</button>
          </div>
          </div>
        ) : (
        <div>
          <button onClick={() => loginWithRedirect()}>Click me to login</button>
        </div>
        )}
      </div>
    );
  }

export default App;