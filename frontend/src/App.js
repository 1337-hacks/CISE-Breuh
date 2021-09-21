import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import PageLayout from './Components/Layout';

// Pages
import HomePage from './Components/Pages/Home';
import DisplayEvidencePage from './Components/Pages/DisplayEvidence';

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    }
  }


  // makeIncrementer = amount => () =>
  //   this.setState(prevState => ({
  //     count: prevState.count + amount,
  //   }));

  // increment = this.makeIncrementer(1);

  render() {
    return (
      <>
        <Router>
          <PageLayout>
            <Switch>
              <Route path="/" component={HomePage} exact />
              <Route path="/displayEvidence" component={DisplayEvidencePage} />
            </Switch>;
          </PageLayout>
        </Router>

        {/* <div>
        <p>Count: {this.state.count}</p>
        <button className="increment" onClick={this.increment}>Increment count</button>
      </div>
      
      <Router>
        <Route path='/disEvidence' component={DisplayEvidencePage} />
      </Router>
      */}
      </>
    );
  }
}

export default App;

