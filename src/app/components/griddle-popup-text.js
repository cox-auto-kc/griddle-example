import React from 'react';
import ReactDOM from 'react-dom';

//Griddle Components
import Griddle from 'griddle-react';

import { Panel, Modal, Button } from 'react-bootstrap';

class GriddlePopupLink extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      show: false
    };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle(){
    this.setState({
      show: !this.state.show
    });
  }


  render(){

    const displayName = this.props.metadata.displayName;
    const linkText = this.props.rowData[this.props.metadata.columnName];
    const abbreviatedText = linkText.substring(0,80);

    return(
      <div className="griddle__inner-cell" data-table-cat={displayName}>
        <div className="griddle__data">
          <div>
            {abbreviatedText}
            ...<br/>
            <a href="#" onClick={this.handleToggle}>
              Click for More
            </a>
          </div>
        </div>


        <Modal show={this.state.show} onHide={this.handleToggle} >
          <Modal.Body>
            {linkText}
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleToggle}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
GriddlePopupLink.propTypes = {
  rowData: React.PropTypes.object,
  metadata: React.PropTypes.object
};

export default GriddlePopupLink;
