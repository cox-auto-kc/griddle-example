import React from 'react';
import ReactDOM from 'react-dom';
//Bootstrap Components
import { Panel, Thumbnail } from 'react-bootstrap';

//Griddle Components
import Griddle from 'griddle-react';

const users = require('../api/users').users;

const columnMeta = [
  {
    "columnName": "id",
    "order": 1,
    "locked": false,
    "visible": true
  },
  {
    "columnName": "avatar",
    "order": 2,
    "locked": false,
    "visible": true,
    "customComponent": <Avatar/>
  },
  {
    "columnName": "name",
    "order": 3,
    "locked": false,
    "visible": true,
    "customComponent": <NameLink/>
  },
  {
    "columnName": "trade",
    "order": 4,
    "locked": false,
    "visible": true
  }
];

class Avatar extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <Thumbnail href="#" src={this.props.rowData.avatar} style={{height: '100px', width: '100px', position: 'relative', overflow: 'hidden'}}/>
    );
  }
}

class NameLink extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <a href={this.props.rowData.link}>{this.props.rowData.name}</a>
    );
  }
}

class AppGriddle extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <h2>Linked Items</h2>
        <Panel>
          <Griddle results={users} columnMetadata={columnMeta} columns={["id", "avatar", "name", "trade"]} />
        </Panel>
      </div>
    );
  }
}


export default AppGriddle;
