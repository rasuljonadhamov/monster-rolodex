import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: { firsName: "Rasuljon", lastName: "Adhamov" },
      company: "ZTM",
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Hi {this.state.name.lastName} {this.state.name.firsName}, I work at{" "}
            {this.state.company}
          </p>
          <button
            onClick={() => {
              this.setState({
                name: { firsName: "Ro'zimuhammad", lastName: "Adhamov" },
                company: "WhiteLine",
              });
            }}
          >
            Change Name
          </button>
        </header>
      </div>
    );
  }
}

export default App;
