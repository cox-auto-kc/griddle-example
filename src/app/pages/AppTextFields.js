import React from 'react';

//Bootstrap Components
import { Panel, FormGroup, Label, InputGroup, FormControl, Glyphicon, Button, DropdownButton, MenuItem } from 'react-bootstrap';

class AppTextFields extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div>
        <p>Text Field</p>
        <Panel>
          <form>
            <FormGroup >
              <InputGroup bsSize="large">
                <InputGroup.Addon>@</InputGroup.Addon>
                <FormControl type="text" placeholder="Username"/>
              </InputGroup>
            </FormGroup>
            <FormGroup >
              <InputGroup>
                <FormControl type="text" placeholder="Username"/>
                <InputGroup.Addon>.00</InputGroup.Addon>
              </InputGroup>
            </FormGroup>
            <FormGroup>
              <InputGroup bsSize="small">
                <InputGroup.Addon>$</InputGroup.Addon>
                <FormControl type="text" placeholder="Username"/>
                <InputGroup.Addon>.00</InputGroup.Addon>
              </InputGroup>
            </FormGroup>

            <FormGroup>
              <InputGroup>
                <FormControl type="text" />
                <InputGroup.Addon>
                  <Glyphicon glyph="music" />
                </InputGroup.Addon>
              </InputGroup>
            </FormGroup>

            <FormGroup>
              <InputGroup>
                <InputGroup.Button>
                  <Button>Before</Button>
                </InputGroup.Button>
                <FormControl type="text" />
              </InputGroup>
            </FormGroup>
            <FormGroup>
              <InputGroup>
                <FormControl type="text" />
                <DropdownButton
                  componentClass={InputGroup.Button}
                  id="input-dropdown-addon"
                  title="Action"
                >
                  <MenuItem key="1">Item</MenuItem>
                </DropdownButton>
              </InputGroup>
            </FormGroup>

            <FormGroup>
              <InputGroup>
                <InputGroup.Addon>
                  <input type="radio" aria-label="..." />
                </InputGroup.Addon>
                <FormControl type="text" />
              </InputGroup>
            </FormGroup>
            <FormGroup>
              <InputGroup>
                <InputGroup.Addon>
                  <input type="checkbox" aria-label="..." />
                </InputGroup.Addon>
                <FormControl type="text" />
              </InputGroup>
            </FormGroup>
          </form>
        </Panel>
      </div>
    );
  }
}

export default AppTextFields;
