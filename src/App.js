import React from "react";
import { BrowserRouter , Route , Switch } from "react-router-dom"
import routes from './routes';
import Template from './components/Template';
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  return (
    
    <BrowserRouter>
    
     <Template>
     <Switch>
    {routes.map((route) => (
      <Route {...route} />
    ))}
     </Switch>
    </Template>
     
   
    </BrowserRouter>
  );
}

export default App;
