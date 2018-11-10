import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import SideDrawer from './components/layout/SideDrawer'
import Backdrop from './components/backdrop/Backdrop'
import './index.css'

class App extends Component {

    state = {
        sideDrawerOpen: false
    }

    drawerToggleClickHandler = () => {
        this.setState((prevState) => {
            return {sideDrawerOpen : !prevState.sideDrawerOpen};
        });
    };

    backdropClickHandler = () => {
        this.setState({sideDrawerOpen: false});
    }

  render() {

      let backdrop;

      if(this.state.sideDrawerOpen){
          backdrop = <Backdrop click={this.backdropClickHandler} />;
      }

      return (
          <BrowserRouter>
              <div className="App" style={{height: '100%'}}>
                <Navbar drawerClickHandler={this.drawerToggleClickHandler} />
                <SideDrawer show={this.state.sideDrawerOpen} closeit={this.backdropClickHandler} />
                {backdrop}
              </div>
          </BrowserRouter>
        );
    }
}

export default App;
