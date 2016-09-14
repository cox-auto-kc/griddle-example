import React from 'react';
import ReactDom from 'react-dom';

//Router
//import { Link } from 'react-router';
import {IndexLink} from 'react-router';

//Bootstrap Components
import { Navbar, Nav, MenuItem } from 'react-bootstrap';

class Navigation extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <Navbar>
        <Nav >
            <MenuItem>
              <IndexLink to='/'>
                Home
              </IndexLink>
            </MenuItem>
            <MenuItem >
              <IndexLink to='/buttons'>
                Buttons
              </IndexLink>
            </MenuItem>
            <MenuItem >
              <IndexLink to='/progress-bar' >
                Progress Bar
              </IndexLink>
            </MenuItem>
            <MenuItem >
              <IndexLink to='/text-fields' >
                Text Fields
              </IndexLink>
            </MenuItem>
            <MenuItem >
              <IndexLink to='/linked-items' >
                Linked Items
              </IndexLink>
            </MenuItem>
            <MenuItem >
              <IndexLink to='/alerts' >
                Alerts
              </IndexLink>
            </MenuItem>
            <MenuItem >
              <IndexLink to='/charts' >
                Charts
              </IndexLink>
            </MenuItem>
            <MenuItem >
              <IndexLink to='/reddit' >
                Reddit
              </IndexLink>
            </MenuItem>
            <MenuItem >
              <IndexLink to='/vehicles' >
                Vehicles
              </IndexLink>
            </MenuItem>
            <MenuItem >
              <IndexLink to='/external-data' >
                External Data
              </IndexLink>
            </MenuItem>
          </Nav>
      </Navbar>
    );
  }
}

export default Navigation;
