// import React, { Component } from "react";
// import firebase from "firebase";
// import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
// // import App from './jwt/App';

// firebase.initializeApp({
//     apiKey: "AIzaSyABDPSX59j229DMrZQ5MA-38ev22BHZ4GU",
//     authDomain: "intense-fb808.firebaseapp.com"
// });

// class Apps extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { isSignedIn: false };
//     this.uiConfig = {
//       signInFlow: "popup",
//       signInOptions: [
//         firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//         firebase.auth.FacebookAuthProvider.PROVIDER_ID,
//         firebase.auth.GithubAuthProvider.PROVIDER_ID,
//       ],
//       callbacks: {
//         signInSuccess: () => false
//       }
//     };
//   }

//   componentDidMount() {
//     firebase.auth().onAuthStateChanged(user => {
//       this.setState({ isSignedIn: !!user });
//       console.log("user", user);
//     });
//   }

//   render() {
//     return (
//       <div className="App" >
//         {this.state.isSignedIn ? (
//           <div>
//             <div>Signed In!</div>
//             <button onClick={() => firebase.auth().signOut()}>Sign out!</button>
//             <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
//             <img
//               alt="profile picture"
//               src={firebase.auth().currentUser.photoURL}
//             />
//           </div>
//         ) : (
//           <StyledFirebaseAuth
//             uiConfig={this.uiConfig}
//             firebaseAuth={firebase.auth()}
//           />
//         )
        
//         }
//       </div>
//     );
//   }
// }

// export default Apps;


// App.js
import React, { useState } from 'react';
import Login from './loginpage';
// import Dashboard from './Dashboard';
import jwt from 'jsonwebtoken';
import Serverdown from './serverdown';
const SECRET_KEY = 'your-secret-key';
const users = [
  { id: 1, username: 'admin', password: '12345' },
  // Add more users here
];

const getUserFromToken = token => {
  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    const user = users.find(u => u.id === decoded.sub);
    return user;
  } catch (error) {
    return null;
  }
};

const Apps = () => {
  const [token, setToken] = useState(sessionStorage.getItem('access_token'));
  const [user, setUser] = useState(token ? getUserFromToken(token) : null);

  const handleLogin = newToken => {
    setToken(newToken);
    sessionStorage.setItem('access_token', newToken);
    setUser(getUserFromToken(newToken));
    window.history.pushState(null, null, '/nxtml');
    // location.reload();
  };

//   const handleLogout = () => {
//     setToken(null);
//     sessionStorage.removeItem('token');
//     setUser(null);
//   };

  return (
    <div>

        <Login onLogin={handleLogin} />
      {/* <Serverdown /> */}
    </div>
  );
};

export default Apps;