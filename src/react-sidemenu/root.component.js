// import React from 'react'
// import e from '../event-bus'

import Navbar from './navbar'
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom'; 



function Root() {
  const history = useHistory();

  if (!sessionStorage.getItem('access_token')) {
    history.push('/login');
    return null; // Or any other fallback content if you don't want to render anything
  }

  return (
    <div id="layout-app">

      <Navbar />
 
    </div>
  );
}

export default Root;

// export default class Root extends React.Component {
//   constructor(props) {
//     super(props)

//     // this.messageHandler = this.messageHandler.bind(this)
//   }

//   // messageHandler(message) {
//   //   this.setState({
//   //     message: message.text
//   //   })
//   // }

//   // sendMessage() {
//   //   e.emit('message', { text: 'Hello from React' })
//   // }


//   render() {
//     return (
//       <div>

//         <Navbar />
        
//         {/* <h1>React Page</h1> */}

//         {/* <p>
//           <button onClick={this.sendMessage}>
//             Send a message to Angular
//           </button>
//         </p> */}
//         {/* <a href='/react-openid'>click</a> */}
//         {/* <Login/> */}
//       </div>
//     )
//   }
// }