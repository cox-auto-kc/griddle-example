import React, { Component, PropTypes } from 'react';

export default class Picker extends Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    const val = this.props.onChange(e.target.value);
    return val;
  }


  render() {
    const { value, options } = this.props;

    return (
      <span>
        <h1>{value}</h1>
        <select
          onChange={this.handleChange}
                value={value}
        >
          {options.map(option =>
            <option value={option} key={option}>
              {option}
            </option>)
          }
        </select>
      </span>
    );
  }
}

Picker.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.string.isRequired
  ).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};
