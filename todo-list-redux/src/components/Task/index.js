import React from "react";

class Task extends React.Component {
  render() {
    return <li>{this.props.data}</li>;
  }
}

export default Task;
