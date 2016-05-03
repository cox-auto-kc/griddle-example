import React from 'react';
import ReactDOM from 'react-dom';
//Bootstrap Components
import { Panel, Thumbnail } from 'react-bootstrap';

//Griddle Components
import Griddle from 'griddle-react';

//Griddle Custom Components
import GriddleAvatar from '../components/griddle-avatar';
import GriddleNameLink from '../components/griddle-name-link';

const users = require('../api/users').users;

const sortName = function(name){
    let a = name.split(" ");
    if(a.length <= 2){
      return a[1] + " " + a[0];
    }
    else{
      return a[2] + " " + a[0] + " " + a[1];
    }
};

const sortAge = function(age){
  const getAge = (age !== "unknown") ? age: "200";
  return getAge;
};

const columnMeta = [
  {
    "columnName": "id",
    "order": 1,
    "locked": false,
    "visible": true,
    "displayName": "ID"
  },
  {
    "columnName": "avatar",
    "order": 2,
    "locked": false,
    "visible": true,
    "customComponent": GriddleAvatar,
    "displayName": "Avatar"
  },
  {
    "columnName": "name",
    "order": 3,
    "locked": false,
    "visible": true,
    "customComponent": GriddleNameLink,
    "displayName": "Name",
    "compare": sortName
  },
  {
    "columnName": "age",
    "order": 4,
    "locked": false,
    "visible": true,
    "displayName": "Age",
    "compare": sortAge
  },
  {
    "columnName": "trade",
    "order": 5,
    "locked": false,
    "visible": true,
    "displayName": "Trade"
  },
  {
    "columnName": "bestknownfor",
    "order": 6,
    "locked": false,
    "visible": true,
    "displayName": "Best Known For"
  },
  {
    "columnName": "lastseen",
    "order": 7,
    "locked": false,
    "visible": true,
    "displayName": "Last Seen"
  }

];

class AppGriddle extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <h2>Linked Items</h2>
        <Panel>
          <Griddle
            tableClassName="table"
            results={users}
            columnMetadata={columnMeta}
            columns={["id", "avatar", "name", "age", "trade", "bestknownfor", "lastseen"]}
            initialSort="age"
            showFilter={true}
            showSettings={true}
          />
        </Panel>
      </div>
    );
  }
}


export default AppGriddle;
