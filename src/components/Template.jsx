import React from "react"
import NavBar from'./navbar';
import SideBar from './sidebar';
function Template({ children }) {
    return (
      <>
        <NavBar/>
        <SideBar/>
        {children}
        
    </>
  )
}

export default Template;