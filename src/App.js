import { Component } from "react";
import "./App.css";
import CardList from "./components/card-list/Cart-list";
import SearchBox from "./components/search/Search-bar";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchValue: "",
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

  onSearch = (e) => {
    const searchValue = e.target.value.toLowerCase();

    this.setState(() => {
      return { searchValue: searchValue };
    });
  };

  render() {
    const filtredMonsters = this.state.monsters.filter((el) => {
      return el.name.toLowerCase().includes(this.state.searchValue);
    });

    return (
      <div className="App">
        <h1 className="app-title">Monsters Rolodex</h1>
        <SearchBox
          onChangeHanler={this.onSearch}
          className="search"
          placeholder="Search Monsters..."
        />
        <CardList monsters={filtredMonsters} />
      </div>
    );
  }
}

export default App;
