import React, { PropTypes, Component } from 'react';

//Bootstrap Components
import { Panel, Thumbnail, Glyphicon } from 'react-bootstrap';

//Griddle Components
import Griddle from 'griddle-react';

//Griddle Custom Components

import GriddleCustomPager from '../components/griddle-custom-pager';

const columnMeta = require('../griddle-meta/redditMeta').columnMeta;

export default class Posts extends Component {

  render() {
    const posts = this.props.posts;
    return (

        <div>
          <h2>Griddle</h2>
          <Panel>
            <Griddle
              useGriddleStyles={false}
              tableClassName="griddle-test-table"
              results={posts}

              columnMetadata={columnMeta}

              columns={[ "id", "author", "thumbnail", "subreddit", "selftext" ]}
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

Posts.propTypes = {
  posts: PropTypes.array.isRequired
};
