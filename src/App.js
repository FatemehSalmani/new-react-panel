import React from "react";
import {HashRouter ,  Route , Switch } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.css';
import routes from './routes';
import Template from './components/Template';



function App() {
  return (
    <HashRouter basename="/new-react-panel">
     <Template>
     <Switch>
    {routes.map((route) => (
      <Route {...route} />
    ))}
     </Switch>
    </Template>
    </HashRouter>
  );
}

export default App;
