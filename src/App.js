import React, { Component } from "react";
import DynamicForm from "./components/DynamicForm";
import "./App.css";

class App extends Component {
  state = {
    data: [
      {
        id: 1,
        name: "A",
        age: 29,
        qualification: "B.Com",
        rating: 3
      },
      {
        id: 2,
        name: "B",
        age: 35,
        qualification: "B.Sc",
        rating: 5
      },
      {
        id: 3,
        name: "C",
        age: 42,
        qualification: "B.E",
        rating: 4
      }
    ]
  };

  onSubmit = model => {
    model.id = +new Date();
    this.setState({
      data: [model, ...this.state.data]
    });
    alert(
      "Name: " +
        JSON.stringify(this.state.data[0].name) +
        "     Age: " +
        JSON.stringify(this.state.data[0].age) +
        "     Rating: " +
        JSON.stringify(this.state.data[0].rating) +
        "     Qualification: " +
        JSON.stringify(this.state.data[0].qualification)
    );
  };

  render() {
    return (
      <div className="App">
        <DynamicForm
          className="form"
          title="Registration"
          model={[
            { key: "name", label: "Name", props: { required: true } },
            { key: "age", label: "Age", type: "number" },
            {
              key: "rating",
              label: "Rating",
              type: "number",
              props: { min: 0, max: 5 }
            },
            { key: "qualification", label: "Qualification" }
          ]}
          onSubmit={model => {
            this.onSubmit(model);
          }}
        />

        <pre>
          <h2>Result 1:</h2>
          {JSON.stringify(this.state.data[0].name)}
          <br />
          {JSON.stringify(this.state.data[0].age)}
          <br />
          {JSON.stringify(this.state.data[0].rating)}
          <br />
          {JSON.stringify(this.state.data[0].qualification)}
          <h2>Result 2:</h2>
          {JSON.stringify(this.state.data[1].name)}
          <br />
          {JSON.stringify(this.state.data[1].age)}
          <br />
          {JSON.stringify(this.state.data[1].rating)}
          <br />
          {JSON.stringify(this.state.data[1].qualification)}
          <h2>Result 3:</h2>
          {JSON.stringify(this.state.data[2].name)}
          <br />
          {JSON.stringify(this.state.data[2].age)}
          <br />
          {JSON.stringify(this.state.data[2].rating)}
          <br />
          {JSON.stringify(this.state.data[2].qualification)}
        </pre>
      </div>
    );
  }
}

export default App;
