import React from 'react';
import { BrowserRouter as Routeer, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Step1} />
        <Route path="/step2" component={Step2} />
        <Route path="/step3" component={Step3} />
        <Route path="/result" component={Result} />
      </Switch>
    </Router>
  );
}

export default App;
