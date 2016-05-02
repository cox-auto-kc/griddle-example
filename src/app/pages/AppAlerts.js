import React from 'react';

//Bootstrap Components
import { Panel, Alert, Glyphicon} from 'react-bootstrap';

class AppAlerts extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <h2>Alerts</h2>
        <Panel>
          <Alert bsStyle="danger">
            <Glyphicon glyph="exclamation-sign" />
            <strong>Holy guacamole!</strong> Enter a valid email address.
          </Alert>
        </Panel>
      </div>
    );
  }
}

export default AppAlerts;
