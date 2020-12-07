import React, { Component } from "react";
import Aux from "../../hoc/Aux/Aux";
import classes from "./Layout.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
  state = {
    showSideDrawer: false,
  };
  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };
  // clean way of setting the state when it depends on the old state
  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    }); // now we have a secure way of toggling that and changing showSideDrawer
  };

  render() {
    return (
      <Aux>
        {/* <div>Toolbar, SideDrawer, Backdrop</div>
         */}
        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
      <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}
        />
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
