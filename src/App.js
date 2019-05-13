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
    alert(JSON.stringify(model));
    this.setState({
      data: [model, ...this.state.data]
    });
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

        <pre style={{ width: "300px" }}>
          {JSON.stringify(this.state.data[0].name)}
          <br />
          {JSON.stringify(this.state.data[0].age)}
          <br />
          {JSON.stringify(this.state.data[0].rating)}
          <br />
          {JSON.stringify(this.state.data[0].qualification)}
        </pre>
      </div>
    );
  }
}

export default App;
