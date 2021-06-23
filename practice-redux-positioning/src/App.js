import ComponentOne from "./components/ComponentOne";

import ComponentTwo from "./components/ComponentTwo";
import ComponentThree from "./components/ComponentThree";
import ReduxComponent from "./components/ReduxComponent";
import { Route, Switch } from "react-router-dom";

const App = () => {


  return (
    <>
      <Switch>
      <Route exact path="/">
          <ReduxComponent />
        </Route>
        <Route path="/component-one">
          <ComponentOne />
        </Route>
        <Route path="/component-two">
          <ComponentTwo />
        </Route>
        <Route path="/component-three">
          <ComponentThree />
        </Route>
      </Switch>
    </>
  );
};

export default App;
