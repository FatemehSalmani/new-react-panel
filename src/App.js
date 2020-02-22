import React from "react";
import { BrowserRouter , Route } from "react-router-dom"
import routes from './routes';
import NavBar from'./components/navbar';
import SideBar from './components/sidebar';
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  return (
    
    <BrowserRouter>
     <NavBar/>
    <SideBar />
    {routes.map((route) => (
      <Route {...route} />
    ))}
    </BrowserRouter>
  );
}

export default App;
