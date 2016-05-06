import React from 'react';
import ReactDOM from 'react-dom';

//Griddle Components
import Griddle from 'griddle-react';

class GriddleNameLink extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <a href={this.props.rowData.link} target="_blank">{this.props.rowData.name}</a>
    );
  }
}
GriddleNameLink.propTypes = {
  rowData: React.PropTypes.object
};

export default GriddleNameLink;
