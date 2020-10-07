import React from "react";
import Task from "../Task";
import { connect } from "react-redux";

class Tasks extends React.Component {
  render() {
    return (
      <ul>
        {this.props.tasks.map((task, key) => {
          return <Task data={task} key={key} />;
        })}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  const { tasks } = state;
  return {
    tasks,
  };
}

export default connect(mapStateToProps)(Tasks);
