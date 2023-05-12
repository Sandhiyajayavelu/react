import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "../Home";
import Register from "../Register";
import Recomendations from "../Recomendations";
import friendslist from "../friendslist";
import Login from "../Login";

//import dataPsricing from "../dataPricing";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/friendslist" component={friendslist} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Register" component={Register} />
          <Route exact path="/Recomendations" component={Recomendations} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
