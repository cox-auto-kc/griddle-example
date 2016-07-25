import React from 'react';

//Bootstrap Components
import { Panel, ProgressBar } from 'react-bootstrap';

const now = 60;

class AppProgressBar extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div>
        <h2>Progress Bar</h2>
        <Panel>
          No label
          <ProgressBar now={55} />

          With label
          <ProgressBar now={now} label={now + '%'} />

          Contextual
          <ProgressBar bsStyle="success" now={40} />
          <ProgressBar bsStyle="info" now={20} />
          <ProgressBar bsStyle="warning" now={60} />
          <ProgressBar bsStyle="danger" now={80} />

          Striped
          <ProgressBar striped bsStyle="success" now={37} />

          Animated
          <ProgressBar active now={72} />

          Stacked
          <ProgressBar>
            <ProgressBar striped bsStyle="success" now={35} key={1} />
            <ProgressBar bsStyle="warning" now={20} key={2} />
            <ProgressBar active bsStyle="danger" now={10} key={3} />
          </ProgressBar>

        </Panel>
      </div>
    );
  }
}

export default AppProgressBar;
