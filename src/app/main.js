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
          <img src="images/react.png" style={{maxWidth: "100%"}}/>
          <h1>This is a React App to start building ReactSuit.</h1>
			<p>This package is specifically set up to view Advanced Griddle examples.  You can view these under the 'Charts', 'Reddit' and 'Vehicles' links</p>
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
