import React, { Component } from 'react';
import Overlay from './Overlay';
import PageContent from './PageContent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Overlay/>
        <PageContent/>
      </div>
    );
  }
}

export default App;
