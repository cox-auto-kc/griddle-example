import React from 'react';
import ReactDOM from 'react-dom';

//Griddle Components
import Griddle from 'griddle-react';

class GriddleResponsiveHeaders extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    const displayName = this.props.metadata.displayName;
    const columnInfo = this.props.rowData[this.props.metadata.columnName];

    const userName = this.props.rowData.name;
    const linkSrc = this.props.rowData[this.props.metadata.customComponentLinkSrc];



    return(
      <div className="griddle__inner-cell" >
        <div className="griddle__responsive-header" >

            <div className="griddle__responsive-id">
              {displayName}: {columnInfo}
            </div>
            <div className="griddle__data">
              <div className="griddle__responsive-name">
                  <a href={linkSrc} target="_blank">{userName}</a>
              </div>
            </div>
        </div>
      </div>
    );
  }
}
GriddleResponsiveHeaders.propTypes = {
  rowData: React.PropTypes.object,
  metadata: React.PropTypes.object
};

export default GriddleResponsiveHeaders;
