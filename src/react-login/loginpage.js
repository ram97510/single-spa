import React, { useState } from 'react';
import './register.css';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// import config from '../json-file/config.json';

const Login = ({ onLogin }) => {


  const [isSignup, setIsSignup] = useState(false); 
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const SECRET_KEY = 'your-secret-key';

  // const dashboardPath = config.dashboards[usernameLower] || '/default-dashboard';
  // window.history.pushState(null, null, dashboardPath);
  // location.reload();

  async function handleAuthForm() {


    if (!username || !password) {
      alert('Please fill in all fields');
      return;
    }

    const salt = bcrypt.genSaltSync(10);
    // const hashedPassword = bcrypt.hashSync(password, salt);
    const hashedPassword = bcrypt.hashSync(password, '$2a$10$CwTycUXWue0Thq9StjUM0u') 


    const usernameLower = username.toLowerCase();

    const endpoint = isSignup
      ? 'http://172.16.0.18:5000/signup' 
      : 'http://172.16.0.18:5000/login'; 

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: usernameLower,
          password: hashedPassword,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        if (isSignup) {

          alert('Signup successful! Please log in.');
          setIsSignup(false); 

        } else {
          // alert('Login successful!');
          console.log("Login successful!")
          
          // const token = jwt.sign(
          //   { id: data.id, username: username },
          //   SECRET_KEY,
          //   { expiresIn: '1h' }
          // );

          // sessionStorage.setItem(
          //   'user',
          //   JSON.stringify({ username, token: token })
          // );

          const token = jwt.sign({ sub: data.id, username: usernameLower }, SECRET_KEY, { expiresIn: '1h' });
        sessionStorage.setItem('user', JSON.stringify({ username: usernameLower, token }));
        onLogin(token);

        
        // const dashboardPath =  '/public/dashboard/a18ee981-37e2-419a-906f-e05ea1cbead8';
        // window.history.pushState(null, null, dashboardPath);

          window.location.href = '/workbench'; 

        }
      } 
      
      // else {
      //   alert(
      //     isSignup
      //       ? 'Signup failed! Try another username.'
      //       : 'Invalid credentials!'
      //   );
      // }

      else {
        const errorData = await response.json()
        if (errorData.error === 'User limit reached! Please contact admin.') {
          alert('User limit reached! Please contact admin.')
        } else if (errorData.error === 'User already exists!') {
          alert('Signup failed! Try another username.')
        } else {
          alert(
            isSignup
              ? 'Signup failed! Please try again.'
              : 'Invalid credentials! Please try again.'
          )
        }
      }


    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong. Please try again.');
    }
  }const isLoginButtonDisabled = !username || !password;
  const buttonClass = isLoginButtonDisabled ? 'form_button form_button_disabled' : 'form_button form_button_enabled';

  return (
    <div className="full_login_page">
      <div className="login_container">
        <div className="side_left">
          <div className="side_left_sub">
            <div className="login_logo">
              <img
                src="src/react-login/itl_logo_1.png"
                alt="Logo"
                className="login_logo_img"
              />
            </div>
            <div className="login_middle">
              <h1>{isSignup ? 'Sign Up' : 'Log In'}</h1>
              <div className="form_items">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleAuthForm();
                  }}
                >
                  <div className="form_item_1">
                    <label className="form_label_1">Username</label> <br />
                    <input
                      type="text"
                      className="form_input_1"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      // placeholder="Enter your username"
                    />
                  </div>
                  <div className="form_item_2">
                    <label className="form_label_1">Password</label> <br />
                    <input
                      type="password"
                      className="form_input_2"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      // placeholder="Enter your password"
                    />
                  </div>
                  <div className="form_item_3">
                    <button type="submit"  className={buttonClass} disabled={isLoginButtonDisabled}>
                      {isSignup ? 'Sign Up' : 'Log In'}
                    </button>
                  </div>
                </form>
              </div>
              <div className="login_end">
                <button
                  className="switch_button"
                  // onClick={() => setIsSignup(!isSignup)}

                  onClick={() => {
                    setIsSignup(!isSignup);
                    setUsername(''); // Clear username on switch
                    setPassword(''); // Clear password on switch
                  }}
                  
                >
                  {isSignup
                    ? 'Already have an account? Log In'
                    : "Don't have an account? Sign Up"}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="side_right">
          <img
            src="src/react-login/undraw_login_re_4vu2 1.png"
            alt="My Image"
            className="side_right_img"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
