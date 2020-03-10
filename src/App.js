import React from "react";
import {HashRouter ,  Route , Switch } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.css';
import routes from './routes';
import DefaultLayout from './components/DefaultLayout';



function App() {
  return (
    <HashRouter basename="/new-react-panel">
     <DefaultLayout>
     <Switch>
    {routes.map((route) => (
      <Route {...route} />
    ))}
     </Switch>
    </DefaultLayout>
    </HashRouter>
  );
}

export default App;
