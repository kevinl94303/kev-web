import React, { Component } from 'react';
import Navbar from './Navbar';
import Overlay from './Overlay';
import PageContent from './PageContent';

class App extends Component {
  constructor(props){
    super(props)
    this.pageContent = React.createRef();
    this.scrollTo = this.scrollTo.bind(this);
  }

  scrollTo(ref){
    eval("window.scrollTo(\{\
      top: this.pageContent.current."+ref+".current.offsetTop - 50\,\
      behavior: \"smooth\"\
    })")
  }

  render() {
    return (
      <div className="App">
        <Navbar scrollTo={this.scrollTo}/>
        <Overlay/>
        <PageContent ref={this.pageContent}/>
      </div>
    );
  }
}

export default App;
