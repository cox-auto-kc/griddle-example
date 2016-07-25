import React from 'react';

//Bootstrap Components
import { Panel, Row, Col, ButtonToolbar, Button, Glyphicon } from 'react-bootstrap';

class AppButtons extends React.Component {
  constructor(props){
    super(props);
  }


  render() {
    return (
      <div>
        <h2>Buttons</h2>
        <Panel>

          <Row style={{marginBottom: '10px'}}>
            <Col xs={12}>
              <ButtonToolbar>
              {/* Standard button */}
              <Button>Default</Button>

              {/* Provides extra visual weight and identifies the primary action in a set of buttons */}
              <Button bsStyle="primary">Primary</Button>

              {/* Indicates a successful or positive action */}
              <Button bsStyle="success">Success</Button>

              {/* Contextual button for informational alert messages */}
              <Button bsStyle="info">Info</Button>

              {/* Indicates caution should be taken with this action */}
              <Button bsStyle="warning">Warning</Button>

              {/* Indicates a dangerous or potentially negative action */}
              <Button bsStyle="danger">Danger</Button>

              {/* Deemphasize a button by making it look like a link while maintaining button behavior */}
              <Button bsStyle="link">Link</Button>

              {/* Standard button with Star */}
              <Button>
                <Glyphicon glyph="star" />
                Default with Icon</Button>
              </ButtonToolbar>
            </Col>
          </Row>
          <Row style={{marginBottom: '10px'}}>
            <Col xs={12}>
              <Row>
                <Col xs={3}>
                  <ButtonToolbar>
                    <Button bsStyle="primary" bsSize="large" block>Large button</Button>
                    <Button bsSize="large" block>Large button</Button>
                  </ButtonToolbar>
                </Col>
                <Col xs={3}>
                  <ButtonToolbar>
                    <Button bsStyle="primary" block>Default button</Button>
                    <Button block>Default button</Button>
                  </ButtonToolbar>
                </Col>
                <Col xs={3}>
                  <ButtonToolbar>
                    <Button bsStyle="primary" bsSize="small" block>Small button</Button>
                    <Button bsSize="small" block>Small button</Button>
                  </ButtonToolbar>
                </Col>
                <Col xs={3}>
                  <ButtonToolbar>
                    <Button bsStyle="primary" bsSize="xsmall" block>Extra small button</Button>
                    <Button bsSize="xsmall" block>Extra small button</Button>
                  </ButtonToolbar>
                </Col>
                </Row>
              </Col>
            </Row>
        </Panel>
      </div>
    );
  }
}

export default AppButtons;
