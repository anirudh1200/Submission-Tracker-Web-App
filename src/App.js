import React, { Component } from 'react';
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

      let sideDrawer;
      let backdrop;

      if(this.state.sideDrawerOpen){
          sideDrawer = <SideDrawer />;
          backdrop = <Backdrop click={this.backdropClickHandler} />;
      }

      return (
          <div className="App" style={{height: '100%'}}>
            <Navbar drawerClickHandler={this.drawerToggleClickHandler} />
            {sideDrawer}
            {backdrop}
          </div>
        );
    }
}

export default App;
