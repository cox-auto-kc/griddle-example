import React from 'react';
import ReactDOM from 'react-dom';

//Griddle Components
import Griddle from 'griddle-react';

class GriddleCell extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    const displayName = this.props.metadata.displayName;
    const columnInfo = this.props.rowData[this.props.metadata.columnName];

    return(
      <div className="griddle__inner-cell" data-table-cat={displayName}>
        <div className="griddle__data">
          {columnInfo}
        </div>
      </div>
    );
  }
}
GriddleCell.propTypes = {
  rowData: React.PropTypes.object,
  metadata: React.PropTypes.object
};


export default GriddleCell;
