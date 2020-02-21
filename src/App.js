import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from './components/navbar';
import SideBar from './components/sidebar';

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <SideBar />
    </React.Fragment>
  );
}

export default App;
