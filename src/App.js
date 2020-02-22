import React from "react";
import { BrowserRouter , Route , Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import routes from './routes';
import Template from './components/Template';



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
