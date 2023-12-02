import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
          return { monsters: users };
        })
      );
  }

  render() {
    return (
      <div className="App">
        <input
          type="search"
          className="search"
          placeholder="Search Monsters..."
          onChange={(e) => {
            const val = e.target.value.toLowerCase();
            const filtredMonsters = this.state.monsters.filter((el) => {
              return el.name.toLowerCase().includes(val);
            });
            this.setState(() => {
              return { monsters: filtredMonsters };
            });
          }}
        />

        {this.state.monsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
