import React from 'react';
import ReactDOM from 'react-dom';
//Bootstrap Components
import { Panel, Thumbnail } from 'react-bootstrap';

//Griddle Components
import Griddle from 'griddle-react';

class GriddleAvatar extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
        <Thumbnail href="#" src={this.props.rowData.avatar} className="griddle-thumb" />
    );
  }
}
GriddleAvatar.propTypes = {
  rowData: React.PropTypes.object
};


export default GriddleAvatar;
