import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Pages
import DisplayEvidencePage from './Components/Pages/DisplayEvidence';

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    }
  }

// class App = () => {
//   return (
//     <div className='DisplayEvidence'
//   )
// }
  makeIncrementer = amount => () =>
    this.setState(prevState => ({
      count: prevState.count + amount,
    }));

  increment = this.makeIncrementer(1);

  render() {
    return (
    <>
      <div>
        <p>Count: {this.state.count}</p>
        <button className="increment" onClick={this.increment}>Increment count</button>
      </div>
      
      <Router>
        <Route path='/disEvidence' component={DisplayEvidencePage} />
      </Router>
      
      </>
    )
  }
}

export default App;

