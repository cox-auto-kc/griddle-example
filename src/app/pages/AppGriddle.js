import React from 'react';
import ReactDOM from 'react-dom';

//Bootstrap Components
import { Panel, Thumbnail, Glyphicon } from 'react-bootstrap';

//Griddle Components
import Griddle from 'griddle-react';

//Griddle Custom Components
import GriddleAvatar from '../components/griddle-avatar';
import GriddleNameLink from '../components/griddle-name-link';
import GriddleCustomHeader from '../components/griddle-custom-header';
import GriddleCustomPager from '../components/griddle-custom-pager';

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
    "displayName": "ID",
    "customHeaderComponent": GriddleCustomHeader,
    "cssClassName": "griddle__column--id"
  },
  {
    "columnName": "avatar",
    "order": 2,
    "locked": false,
    "visible": true,
    "customComponent": GriddleAvatar,
    "sortable": false,
    "displayName": "Avatar",
    "customHeaderComponent": GriddleCustomHeader,
    "cssClassName": "griddle__column--avatar"
  },
  {
    "columnName": "name",
    "order": 3,
    "locked": false,
    "visible": true,
    "customComponent": GriddleNameLink,
    "displayName": "Name",
    "compare": sortName,
    "customHeaderComponent": GriddleCustomHeader,
    "cssClassName": "griddle__column--name"
  },
  {
    "columnName": "age",
    "order": 4,
    "locked": false,
    "visible": true,
    "displayName": "Age",
    "compare": sortAge,
    "customHeaderComponent": GriddleCustomHeader,
    "cssClassName": "griddle__column--age"
  },
  {
    "columnName": "trade",
    "order": 5,
    "locked": false,
    "visible": true,
    "displayName": "Trade",
    "customHeaderComponent": GriddleCustomHeader,
    "cssClassName": "griddle__column--trade"
  },
  {
    "columnName": "bestknownfor",
    "order": 6,
    "locked": false,
    "visible": true,
    "sortable": false,
    "displayName": "Best Known For",
    "customHeaderComponent": GriddleCustomHeader,
    "cssClassName": "griddle__column--known"
  },
  {
    "columnName": "lastseen",
    "order": 7,
    "locked": false,
    "visible": true,
    "displayName": "Last Seen",
    "customHeaderComponent": GriddleCustomHeader,
    "cssClassName": "griddle__column--last-ref"
  },
  {
    "columnName": "link",
    "order": 8,
    "locked": true,
    "visible": false
  }

];

class AppGriddle extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: users
    };
  }

  render() {
    return (
      <div>
        <h2>Griddle</h2>
        <Panel>
          <Griddle
            useGriddleStyles={false}
            tableClassName="table"
            //results={this.state.data}
            results={users}

            columnMetadata={columnMeta}
            columns={["id", "avatar", "name", "age", "trade", "bestknownfor", "lastseen"]}
            initialSort="name"
            sortAscendingComponent={<small className="griddle__header-sort-icon"><Glyphicon glyph="chevron-up" /></small>}
            sortDescendingComponent={<small className="griddle__header-sort-icon"><Glyphicon glyph="chevron-down" /></small>}
            nextIconComponent={<Glyphicon glyph="chevron-right" />}
            previousIconComponent={<Glyphicon glyph="chevron-left" />}
            settingsToggleClassName="btn btn-primary"

            nextText={""}
            previousText={""}
            pagerBsSize={"small"}
            useCustomPagerComponent={true}
            customPagerComponent={GriddleCustomPager}


            showFilter={true}
            showSettings={true}

          />
        </Panel>
      </div>
    );
  }
}


export default AppGriddle;
