/**
 * In this file, we create a React component
 * which incorporates some basic markup and images.
 */

import React from 'react';
import ReactDom from 'react-dom';

//Bootstrap Components
import {Grid, Row, Col} from 'react-bootstrap';

//Components
import Navigation from './components/navigation';

class Main extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <Grid fluid>
        <center>
          <Navigation />
          <img src="images/react.png" />
          <h1>This is a React App to start building ReactSuit.  Yay!</h1>

          <Grid className="background__MainWrapper">
            {this.props.children}
          </Grid>

        </center>
      </Grid>
    );
  }
}
Main.propTypes = { children: React.PropTypes.node };

export default Main;
