import React, { useCallback, useState } from 'react';
import './styles.css';
import  User  from './User';
import {
  LoginSocialGoogle,
  // LoginSocialFacebook,
  LoginSocialGithub,
  LoginSocialTwitter,
} from 'reactjs-social-login';

// import {
//   FacebookLoginButton,
//   GoogleLoginButton,
//   GithubLoginButton,
//   AmazonLoginButton,
//   InstagramLoginButton,
//   LinkedInLoginButton,
//   MicrosoftLoginButton,
//   TwitterLoginButton,
//   AppleLoginButton,
// } from 'react-social-login-buttons';

// import { ReactComponent as PinterestLogo } from './assets/pinterest.svg';

// const REDIRECT_URI =
//   'https://plenty-planets-beam-42-118-51-2.loca.lt/account/login';
const REDIRECT_URI = 'http://localhost:9090/login'

const App = () => {
  const [provider, setProvider] = useState('');
  const [profile, setProfile] = useState(null);

  
  const onLoginStart = useCallback(() => {
    alert('login start');

  }, []);


  const onLogoutSuccess = useCallback(() => {
    setProfile(null);
    setProvider('');
    alert('logout success');
  }, []);

  const onLogout = useCallback(() => {}, []);

  

  return (
    <div className='openid-full'>
      {provider && profile && (
        <User provider={provider} profile={profile} onLogout={onLogout} />
      )}
      <div className={`App ${provider && profile ? 'hide' : ''}`}>
        <h1 className="title">ReactJS Social Login</h1>
       <div>

       {/* <li>
            <Link to="/app">App</Link>
          </li> */}

        <LoginSocialTwitter
            isOnlyGetCode
            client_id="VUlaVHRPM1NCd2dKWWhhQlA4cy06MTpjaQ"
            redirect_uri={REDIRECT_URI}
            onLoginStart={onLoginStart}
            onResolve={({ provider, data }) => {
              setProvider(provider)
              setProfile(data)
              console.log("login successfully")
              window.history.pushState(null, null, '/');
            }}
            onReject={(err) => {
              console.log(err)
            }}
          >
            {/* <TwitterLoginButton /> */}
            <button className='openid-btn' id='openid-twitter'>Twitter</button>
          </LoginSocialTwitter>  <br />

        <LoginSocialGithub
        isOnlyGetCode 
        client_id="3ca5f71d11e563684473"
        client_secret="d04daafb1be4c25aa456f93486aa063f81f1c23c"
        redirect_uri={REDIRECT_URI}
        onLoginStart={onLoginStart}
        onResolve={({ provider, data }) => {
          setProvider(provider)
          setProfile(data)
          console.log("login successfully")
          window.history.pushState(null, null, '/');
        }}
        onReject={(err) => {
          console.log(err)
        }}
       
        >
           <button className='openid-btn' id='openid-github'>GitHub</button>
          {/* <GithubLoginButton /> */}
        </LoginSocialGithub>  <br />
        <LoginSocialGoogle
            isOnlyGetToken
            client_id="607458525049-9bhigct7r0mutvsrm8ti7e598c5nmdb8.apps.googleusercontent.com"
            redirect_uri={REDIRECT_URI}
          scope="openid profile email"
          discoveryDocs="claims_supported"
          access_type="offline"
            onLoginStart={onLoginStart}
            onResolve={({ provider, data }) => {
              setProvider(provider)
              setProfile(data)
              window.history.pushState(null, null, '/');
            }}
            onReject={(err) => {
              console.log(err)
            }}
          >
            <button className='openid-btn' id='openid-google'>Google</button>
          </LoginSocialGoogle>
           
    {/*    <LoginSocialGoogle
          client_id="607458525049-9bhigct7r0mutvsrm8ti7e598c5nmdb8.apps.googleusercontent.com"
          onLoginStart={onLoginStart}
          redirect_uri={REDIRECT_URI}
          scope="openid profile email"
          discoveryDocs="claims_supported"
          access_type="offline"
          onResolve={({ provider, data }) => {
            setProvider(provider);
            setProfile(data);
            console.log("login successfully")
            window.history.pushState(null, null, '/');
          }}
          onReject={err => {
            console.log("login failed",err);
          }}
        >
          <button className='openid-btn' id='openid-google'>Google</button>
        </LoginSocialGoogle>  */}
      </div>
    </div>
    </div>
  );
};

export default App;