import React, { PropTypes, Component } from 'react';
//Bootstrap Components
import { Panel, Thumbnail, Glyphicon } from 'react-bootstrap';

//Griddle Components
import Griddle from 'griddle-react';
import GriddleWithCallback from '../api/griddleWithCallback';

//Griddle Custom Components
import GriddleCustomPager from '../components/griddle-custom-pager';

import fetch from 'isomorphic-fetch';
const columnMeta = require('../griddle-meta/externalDataMeta').columnMeta;

import swapiModule from '../api/swapi.min';

const Loading = React.createClass({
  getDefaultProps: function(){
    return {
      loadingText: "Loading"
    }
  },
  render: function(){
    return <div className="loading">{this.props.loadingText}</div>;
  }
});

export default class AppExternalData extends Component {
  constructor(props) {
    super(props);
    this.loadData = this.loadData.bind(this);
  }

  loadData(filterString, sortColumn, sortAscending, page, pageSize, callback){
    const self = this;

    page+=1;

    swapiModule.getStarships(page, function(data){
      callback({
        results: data.results,
        totalResults: data.count,
        pageSize: pageSize
      });
    });

  };

  render() {
    return (
      <div>
        <h2>Vehicle Data</h2>
        <Panel>
          <GriddleWithCallback
            columnMetadata={columnMeta}
            columns={["name", "model", "manufacturer", "passengers"]}
            useCustomPagerComponent={true}
            customPagerComponent={GriddleCustomPager}

            tableClassName="table"
            sortAscendingComponent={<small className="griddle__header-sort-icon"><Glyphicon glyph="chevron-up" /></small>}
            sortDescendingComponent={<small className="griddle__header-sort-icon"><Glyphicon glyph="chevron-down" /></small>}


            getExternalResults={this.loadData}
            loadingComponent={Loading}
            resultsPerPage={10}

            showFilter={true}
            showSettings={true}

          />
        </Panel>
      </div>
    );
  }
}
