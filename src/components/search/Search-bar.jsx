import { Component } from "react";
import "./Search-box.css";

class SearchBox extends Component {
  render() {
    return (
      <div>
        <input
          type="search"
          className={this.props.className}
          placeholder={this.props.placeholder}
          onChange={this.props.onChangeHanler}
        />
      </div>
    );
  }
}

export default SearchBox;
