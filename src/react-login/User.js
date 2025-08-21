// // src/App.js
// import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from './App';
import { Link } from 'react-router-dom';

// import Apps from './Apps';
// function User() {
//   return (
//     <div>
//       <nav>
//         <ul>
//           <li>
//             {/* <Link to="/">Home</Link> */}
//           </li>
          // <li>
          //   {/* <Link to="/app">App</Link> */}
          // </li>
//         </ul>
//       </nav>
      // <Switch>
      //   <Route exact path="/" component={App} />
      //   <Route path="/apps" component={Apps} />
      // </Switch>
//     </div>
//   );
// }

// export default User;


import React from "react";
import './register.css';


const imageUrl = '/images/intenselogo.png';

class User extends React.Component {
    navigateTo(url) {
      window.history.pushState(null, null, url);
    }

    
render() {
    return (
      <div className="full_login_page">
        <div className="login_container">
            <div className="side_left">
                <div className="side_left_sub">
                <div className="login_logo">
                <img src={imageUrl} alt="logo" className='login_logo_img' />
                </div>
                <div className="login_middle">
                    <h1>Log in</h1>
                    
                    <div className="login_sociallogin">
                        <button className="sociallogin_fb">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png" height={"20px"} id="sso_google_icon"/>
                            Log in with Facebook</button> <br />
                        <button className="sociallogin_google"> 
                        <img src="https://static-00.iconduck.com/assets.00/google-icon-2048x2048-czn3g8x8.png" height={"20px"} id="sso_google_icon"/>
                        Log in with Google</button>
                    </div>
                    <div className="login_border">
                        <div className="br_1"></div>
                        <div className="br_2">OR</div>
                        <div className="br_3"></div>
                    </div>
                    <div className="form_items">
                        <form>
                            <div className="form_item_1">
                                <label className="form_label_1">Your email</label> <br />
                                <input type="text" className="form_input_1"/>
                            </div>
                            <div className="form_item_2">
                                <label className="form_label_1">Your password</label> <br />
                                <input type="text" className="form_input_2"/>
                            </div>
                            <div className="form_item_3">
                                <button className="form_button" >Log in</button>
                            </div>
                        </form>
                    </div>
                    <div className="login_end">
                        Dont have an Account? <a href="/register" onClick={(e) => { e.preventDefault(); this.navigateTo('/register');}} id="reg_color"> Register</a>
                    </div>
                </div>
                </div>
            </div>
                <div className="side_right">
                    <img src="https://careermilaap.com/_next/static/images/training_plus_internship-3eff7000ac0ffe1560a027e04d63e4aa.svg" alt="My Image" className='side_right_img' />
                </div>
                
        </div>
        {/* <li>
            <Link to="/app">App</Link>
          </li>
        <Switch>
        <Route exact path="/" component={App} />
        <Route path="/app" component={App} />
      </Switch> */}
      </div>
    )
}
}

export default User;