import React from "react"
import "./componentStyles.css"
import NavBar from'./navbar';
import SideBar from './sidebar';
import Footer from './footer';

function Template({ children }) {
    return ( 
     <div class="container ">
     <NavBar/> 
     <div class="row">
           <div class="leftcolumn">
           {children} 
           </div>   
           <div class="rightcolumn">
           <SideBar/>
           </div>
        </div>
    <div class="footer">
       <Footer/>
    </div>
  </div>
    
  )
}

export default Template;
