import React from "react"
import "./componentStyles.css"
import NavBar from'./navbar';
import SideBar from './sidebar';

function Template({ children }) {
    return (   
   <div class="container ">
        <NavBar/> 
         <div class="row">
           <div id="content" class="col-9 float-left">
                {children}
           </div>
           <div id="sidebar" class="col-3 m-1 bg-dark text-white-50 float-right " >
           <SideBar/>
           </div>
        </div>
  </div>
    
  )
}

export default Template;