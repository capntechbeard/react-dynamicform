import React from "react";
import ReactDOM from "react-dom";
import "./form.css";

export default class DynamicForm extends React.Component {
  state = {};
  constructor(props) {
    super(props);
  }

  render() {
    let title = this.props.title || "Dynamic Form";
    return (
      <div className={this.props.className}>
        <h3>{title}</h3>
      </div>
    );
  }
}
