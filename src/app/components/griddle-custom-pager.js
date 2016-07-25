import React from 'react';
import ReactDOM from 'react-dom';

//Griddle Components
import Griddle from 'griddle-react';

//Bootstrap Components
import { Pagination, Glyphicon } from 'react-bootstrap';

class GriddleCustomPager extends React.Component{
  constructor(props){
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
    this.state = {
      activePage: 1
    };
  }

  getPrev() {
    if (this.props.currentPage > 0) {
      return (
        <span className="previous">
          <Glyphicon glyph="chevron-left"/>
          {this.props.previousText}
        </span>
      );
    }
  }

  getNext(){
      if(this.props.currentPage != (this.props.maxPage -1)){
        return(
          <span className="next">
            {this.props.nextText}
            <Glyphicon glyph="chevron-right" />
          </span>
        );
      }
  }

  handleSelect(eventKey) {
    const maxPage = this.props.maxPage;
    const page = eventKey;

    if(page > maxPage || !page)
      return;
    this.props.setPage(page-1);
  }

  render(){
    const maxPage     = this.props.maxPage;

    if (maxPage < 2) { return <span />; }

    return (
      <div className="griddle__pagination-container">
        <Pagination
          bsSize={"small"}
          items={maxPage}
          next={this.getNext()}
          prev={this.getPrev()}
          maxButtons={Math.min(this.props.maxButtons, maxPage)}
          activePage={this.props.currentPage + 1}
          onSelect={this.handleSelect}
        />
      </div>
    );
  }
}

GriddleCustomPager.propTypes = {
  currentPage  : React.PropTypes.number,
  maxPage      : React.PropTypes.number,
  maxButtons   : React.PropTypes.number,
  nextText     : React.PropTypes.string,
  previousText : React.PropTypes.string,
  setPage      : React.PropTypes.func
};

GriddleCustomPager.defaultProps = {
  currentPage  : 0,
  maxPage      : 0,
  maxButtons   : 10,
  nextText     : "Next",
  previousText : "Previous"
};

export default GriddleCustomPager;
