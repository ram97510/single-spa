
import React, { useState } from 'react';
import "./style.css";

const Navbar = () => {
  const navigateTo = (url) => {
    window.history.pushState(null, null, url);
    location.reload();
  }

  // const navigateTo = (url, isMetabase = false) => {
  //   const currentUrl = isMetabase ? `${window.location.pathname}${window.location.search}` : window.location.pathname;
    
  //   if (currentUrl !== url) {
  //     window.history.pushState(null, null, url);
  //     location.reload();
  //   }
  // };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const logout = () => {
      sessionStorage.removeItem('user');
      sessionStorage.removeItem('access_token');
      window.history.pushState(null, null, '/login');
      location.reload();
  };

  return (
    <div className='navbar_full'>
      <div className='navbar_menu_link1'>
        <div className='navbar_menu_link'>
        {/* <a href="/" onClick={(e) => { e.preventDefault(); navigateTo('/');}} className='menu_link_logo'> 
          <img src="src\react-login\itl_logo_1.png" alt="Logo" className='menu_logo_link' />
        </a> */}
        {/* <a className='menu_link_logo'> 
          <img src="src\react-login\itl_logo_1.png" alt="Logo" className='menu_logo_link' />
        </a> */}

        <a className='menu_link_logo'> 
          <img src="https://www.gartner.com/imagesrv/peer-insights/vendors/logos/intense-technologies.png" alt="Logo" className='menu_logo_link' />
        </a>
           {/* <a href="/?app=lab"
             onClick={(e) => { e.preventDefault(); navigateTo('/?app=lab', true); }} 
             className={`menu_link ${window.location.search.includes('app=lab') ? 'active' : ''}`}
          > Workbench </a> */}


          <a href="/workbench" onClick={(e) => { e.preventDefault(); navigateTo('/workbench');}} className={`menu_link ${window.location.pathname === '/workbench' ? 'active' : ''}`}> Workbench </a>


           <a href="/feast" onClick={(e) => { e.preventDefault(); navigateTo('/feast');}} className={`menu_link ${window.location.pathname === '/feast' ? 'active' : ''}`}> Feature Store </a>
       
        {/* <a href="/home" onClick={(e) => { e.preventDefault(); navigateTo('/home');}} id='menu_link_id' className='menu_link'>Home </a> */}
        <a href="/genai" onClick={(e) => { e.preventDefault(); navigateTo('/genai');}} className={`menu_link ${window.location.pathname === '/genai' ? 'active' : ''}`}> Gen AI </a>
        {/* <a href="/?app=work" onClick={(e) => { e.preventDefault(); navigateTo('/?app=work');}} className={`menu_link ${window.location.pathname === '/workbench' ? 'active' : ''}`}> Work Bench </a> */}


        <a href="/nxtcd" onClick={(e) => { e.preventDefault(); navigateTo('/nxtcd');}} className={`menu_link ${window.location.pathname === '/nxtcd' ? 'active' : ''}`}> NXT CD </a>

        {/* <a href="/nifi" onClick={(e) => { e.preventDefault(); navigateTo('/nifi');}} className={`menu_link ${window.location.pathname === '/nifi' ? 'active' : ''}`}> Nifi </a> */}

        {/* <a href="/" onClick={(e) => { e.preventDefault(); navigateTo('/?app=metabase'); }} className='menu_link'>Analytics</a> */}
        <a href="/nxtml" onClick={(e) => { e.preventDefault(); navigateTo('/nxtml');}} className={`menu_link ${window.location.pathname === '/nxtml' ? 'active' : ''}`}> AI ML </a>
       
        <a href="/collection/root" onClick={(e) => { e.preventDefault(); navigateTo('/collection/root');}} className={`menu_link ${window.location.pathname === '/collection/root' ? 'active' : ''}`}> Analytics </a>
{/* 
          <a href="/?app=metabase"
             onClick={(e) => { e.preventDefault(); navigateTo('/?app=metabase', true); }} 
             className={`menu_link ${window.location.search.includes('app=metabase') ? 'active' : ''}`}
          > Analytics </a> */}

        </div>
      <div className='menu_account'>
        <button className='menu_account_btn' onClick={toggleMenu}>
          <img src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' id='profile_img' alt='user'/>
        </button>
        {isMenuOpen && (
          <ul className="navbar_menu">
            <li id='user_name'>Hi User !</li>
            {/* <li>Settings</li> */}
            <li id='log_out' onClick={logout}>Logout</li>
          </ul>
        )}
      </div>
      </div>
      
    </div>
  );
}

export default Navbar;


