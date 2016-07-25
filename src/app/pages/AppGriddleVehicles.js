import React, { PropTypes, Component } from 'react';

//Bootstrap Components
import { Panel, Thumbnail, Glyphicon } from 'react-bootstrap';

//Griddle Components
import Griddle from 'griddle-react';

//Griddle Custom Components

import GriddleCustomPager from '../components/griddle-custom-pager';

const vehicleData = require('../api/vehicleData').vehicleData;
const columnMeta = require('../griddle-meta/vehicleDataMeta').columnMeta;

export default class AppGriddleVehicles extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>Vehicle Data</h2>
        <Panel>
          <Griddle
            useGriddleStyles={false}
            tableClassName="griddle-test-table"
            results={vehicleData}

            columnMetadata={columnMeta}

            columns={[ "Make", "Model", "Year", "Price", "Image" ]}
            initialSort="name"
            sortAscendingComponent={<small className="griddle__header-sort-icon"><Glyphicon glyph="chevron-up" /></small>}
            sortDescendingComponent={<small className="griddle__header-sort-icon"><Glyphicon glyph="chevron-down" /></small>}

            nextIconComponent={<Glyphicon glyph="chevron-right" />}
            previousIconComponent={<Glyphicon glyph="chevron-left" />}
            settingsToggleClassName="btn btn-primary"

            nextText={""}
            previousText={""}


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

