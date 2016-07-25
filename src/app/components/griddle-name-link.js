import React from 'react';
import ReactDOM from 'react-dom';

//Griddle Components
import Griddle from 'griddle-react';

class GriddleNameLink extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    const displayName = this.props.metadata.displayName;
    const linkText = this.props.rowData[this.props.metadata.columnName];
    const linkSrc = this.props.rowData[this.props.metadata.customComponentLinkSrc];

    return(
      <div className="griddle__inner-cell" data-table-cat={displayName}>
        <div className="griddle__data">
          <a href={linkSrc} target="_blank">{linkText}</a>
        </div>
      </div>
    );
  }
}
GriddleNameLink.propTypes = {
  rowData: React.PropTypes.object,
  metadata: React.PropTypes.object
};

export default GriddleNameLink;
