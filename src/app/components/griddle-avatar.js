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

  checkImage(src){
    const imageSrc = (src !== 'self' && src !== 'default') ?  src: '../images/missing.jpg';
    return imageSrc;
  }

  render(){
    const displayName = this.props.metadata.displayName;
    const imageSrc = this.checkImage(this.props.rowData[this.props.metadata.columnName]);

    const linkSrc = !this.props.metadata.customComponentLinkSrc ? "#": this.props.rowData[this.props.metadata.customComponentLinkSrc];
    const target = (!this.props.metadata.customComponentLinkSrc) ? null : "_blank";

    return(
      <div className="griddle__inner-cell" data-table-cat={displayName} >
        <div className="griddle__data">
          <Thumbnail href={linkSrc} target={target} src={imageSrc} className="griddle-thumb" />
        </div>
      </div>
    );
  }
}
GriddleAvatar.propTypes = {
  rowData: React.PropTypes.object,
  metadata: React.PropTypes.object
};


export default GriddleAvatar;
