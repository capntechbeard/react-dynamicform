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

  downloadTxtFile = () => {
    const element = document.createElement("a");
    const file = new Blob([document.getElementById("myInput").value], {
      type: "text/plain"
    });
    element.href = URL.createObjectURL(file);
    element.download = "myFile.txt";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  };

  onSubmit = model => {
    model.id = +new Date();
    this.setState({
      data: [model, ...this.state.data]
    });
    alert(
      "Name: " +
        JSON.stringify(this.state.data[0].name).replace(/^"(.+)"$/, "$1") +
        "     Age: " +
        JSON.stringify(this.state.data[0].age) +
        "     Rating: " +
        JSON.stringify(this.state.data[0].rating) +
        "     Qualification: " +
        JSON.stringify(this.state.data[0].qualification).replace(
          /^"(.+)"$/,
          "$1"
        )
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
          {JSON.stringify(this.state.data[0].name).replace(/^"(.+)"$/, "$1")}
          <br />
          {JSON.stringify(this.state.data[0].age).replace(/^"(.+)"$/, "$1")}
          <br />
          {JSON.stringify(this.state.data[0].rating).replace(/^"(.+)"$/, "$1")}
          <br />
          {JSON.stringify(this.state.data[0].qualification).replace(
            /^"(.+)"$/,
            "$1"
          )}
          <h2>Result 2:</h2>
          {JSON.stringify(this.state.data[1].name).replace(/^"(.+)"$/, "$1")}
          <br />
          {JSON.stringify(this.state.data[1].age).replace(/^"(.+)"$/, "$1")}
          <br />
          {JSON.stringify(this.state.data[1].rating).replace(/^"(.+)"$/, "$1")}
          <br />
          {JSON.stringify(this.state.data[1].qualification).replace(
            /^"(.+)"$/,
            "$1"
          )}
          <h2>Result 3:</h2>
          {JSON.stringify(this.state.data[2].name).replace(/^"(.+)"$/, "$1")}
          <br />
          {JSON.stringify(this.state.data[2].age).replace(/^"(.+)"$/, "$1")}
          <br />
          {JSON.stringify(this.state.data[2].rating).replace(/^"(.+)"$/, "$1")}
          <br />
          {JSON.stringify(this.state.data[2].qualification).replace(
            /^"(.+)"$/,
            "$1"
          )}
        </pre>

        <input id="myInput" />
        <button onClick={this.downloadTxtFile}>Download txt</button>
      </div>
    );
  }
}

export default App;
