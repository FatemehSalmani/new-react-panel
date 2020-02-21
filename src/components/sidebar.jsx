import { Nav, NavItem} from 'react-bootstrap';
 
import React from 'react';
 
import Sidebar from 'react-bootstrap-sidebar';

function sidebar() {
  return (
    
    <div>
    <Sidebar side='left' isVisible={ this.state.isVisible } >
      <Nav>
        <NavItem href="#">Link 1</NavItem>
        <NavItem href="#">Link 2</NavItem>
        <NavItem href="#">Link 3</NavItem>
        <NavItem href="#">Link 4</NavItem>
      </Nav>
    </Sidebar>
</div>
  );
}

export default sidebar;
