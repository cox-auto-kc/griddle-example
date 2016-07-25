import React from 'react';
import ReactDOM from 'react-dom';

//Griddle Components
import Griddle from 'griddle-react';
import GriddleCell from '../components/griddle-cell';

class GriddleResponsiveHeaders extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      responsiveView: false
    };

    this.componentWillMount = this.componentWillMount.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.componentWillUnmount = this.componentWillUnmount.bind(this);
    this.handleResize = this.handleResize.bind(this);
  }


  componentWillMount() {
    window.addEventListener('load', this.handleResize);
    window.addEventListener('click', this.handleResize);
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
    window.removeEventListener('load', this.handleResize);
    window.removeEventListener('click', this.handleResize);
  }

  handleResize(e) {
    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const view = ( width < 992 ) ? true : false;
        this.setState({responsiveView: view});
  }


  doMobileHeader(){
    const columnInfo = this.props.rowData[this.props.metadata.columnName];
    const displayName = this.props.metadata.displayName;
    const linkSrc = this.props.rowData[this.props.metadata.customComponentLinkSrc];
    const right = this.props.metadata.responsiveHeaderProps.right;
    const displayRight = this.props.rowData[right];
    return(
      <div className="griddle__responsive-header">
        <div className="griddle__responsive-title-column">
          <div className="griddle__responsive-id">
            {columnInfo}
          </div>
        </div>
        <div className="griddle__data">
          <div className="griddle__responsive-name">
            <a href={linkSrc}>{displayRight}</a>
          </div>
        </div>
      </div>
    );
  }

  doId(){
    return(
      <GriddleCell rowData={this.props.rowData}  metadata={this.props.metadata} />
    );
  }

  render(){
    const responsiveView = this.state.responsiveView;

    if(responsiveView){
      return this.doMobileHeader();
    }else{
      return this.doId();
    }
  }
}

GriddleResponsiveHeaders.propTypes = {
  rowData: React.PropTypes.object,
  metadata: React.PropTypes.object
};




export default GriddleResponsiveHeaders;
