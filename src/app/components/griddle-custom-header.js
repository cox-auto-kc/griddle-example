import React from 'react';
import ReactDOM from 'react-dom';

//Griddle Components
import Griddle from 'griddle-react';

class GriddleCustomHeader extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <span className="griddle__header">
        {this.props.displayName}
      </span>
    );
  }
}
GriddleCustomHeader.propTypes = {
  rowData: React.PropTypes.object,
  displayName: React.PropTypes.string
};


export default GriddleCustomHeader;
