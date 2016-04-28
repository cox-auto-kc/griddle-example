/**
 * In this file, we create a React component
 * which incorporates some basic markup and images.
 */

import React from 'react';

const styles = {
  containerDiv: {
    width: '100%'
  },
};

class Main extends React.Component {
  render() {
    return (
      <div style={styles.containerDiv}>
        <center>
          <img src="images/react.png" />
          <h1>Hello!</h1>
        </center>
      </div>
    );
  }
}

export default Main;