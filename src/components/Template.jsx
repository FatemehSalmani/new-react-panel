import React from "react"
import NavBar from'./navbar';
import SideBar from './sidebar';
function Template({ children }) {
    return (
      
   <div class="container">
        <NavBar/>
        <SideBar/>
        <div class="row">
    <div id="content" class="d-inline m-lg-2 col-lg-8 col-md-9 col-sm-6 col-xs-12">
                {children}
     </div>
    </div>
     
  </div>
    
  )
}

export default Template;