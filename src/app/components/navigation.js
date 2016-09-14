import React from 'react';
import ReactDom from 'react-dom';

//Router
//import { Link } from 'react-router';
<<<<<<< HEAD
import {IndexLink} from 'react-router';
=======
>>>>>>> 14d82be23df41153f8390fdd1678ef286fc19035

//Bootstrap Components
import { Navbar, Nav, MenuItem } from 'react-bootstrap';

<<<<<<< HEAD
=======


>>>>>>> 14d82be23df41153f8390fdd1678ef286fc19035
class Navigation extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <Navbar>
        <Nav >
<<<<<<< HEAD
            <MenuItem
            >
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
=======
            <MenuItem href="/" >
              Home
            </MenuItem>
            <MenuItem href="/buttons" >
              Buttons
            </MenuItem>
            <MenuItem href="/progress-bar" >
              Progress Bar
            </MenuItem>
            <MenuItem href="/text-fields" >
              Text Fields
            </MenuItem>
            <MenuItem href="/linked-items" >
              Linked Items
            </MenuItem>
            <MenuItem href="/alerts" >
              Alerts
            </MenuItem>
            <MenuItem href="/charts" >
              Charts
            </MenuItem>
            <MenuItem href="/reddit" >
              Reddit
            </MenuItem>
            <MenuItem href="/vehicles" >
              Vehicles
>>>>>>> 14d82be23df41153f8390fdd1678ef286fc19035
            </MenuItem>
          </Nav>
      </Navbar>
    );
  }
}

export default Navigation;
