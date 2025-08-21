import React from "react";
import SSR from "./ssr";

class Root extends React.Component {
    
render() {
    return (
      <div className="full_login_page mt-5">
        <SSR />
      </div>
    )
}
}

export default Root;