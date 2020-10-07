import React from "react";
import { connect } from "react-redux";
import { changeInputValue } from "../../store";

class Input extends React.Component {
  handleChange(value) {
    const { dispatch } = this.props;
    dispatch(changeInputValue(value));
  }

  render() {
    return (
      <input type="text" onChange={(e) => this.handleChange(e.target.value)} />
    );
  }
}

export default connect()(Input);
