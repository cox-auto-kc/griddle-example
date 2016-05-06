import React from 'react';
import ReactDOM from 'react-dom';

//Griddle Components
import Griddle from 'griddle-react';

class GriddleCustomHeader extends React.Component{
  constructor(props){
    super(props);
  }


  render(){
    const isSortableClass = this.props.sortable ? 'griddle__is-sortable' : null;

    return(
        <span className={"griddle__header " + isSortableClass} >
          {this.props.displayName}
        </span>
    );
  }
}

GriddleCustomHeader.propTypes = {
  displayName: React.PropTypes.string,
  sortable: React.PropTypes.bool
};


export default GriddleCustomHeader;
