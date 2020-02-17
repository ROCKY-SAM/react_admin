
import React, { Component } from 'react';
import Header from './template/header';
import Footer from './template/footer';
import Aside from './template/aside';
import Nav from './template/nav';
import Main from './template/main';
class  App extends Component {
  render() {
    return (
      <div id="page-container"  className="sidebar-o sidebar-inverse side-scroll page-header-glass page-header-inverse main-content-boxed" >
      <Aside/>
        <Header />
        <Nav />
        <Main/>
        <Footer />
      </div>
 
    )
  }
}

export default App;
