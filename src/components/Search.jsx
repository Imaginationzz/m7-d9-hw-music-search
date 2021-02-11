import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/index.css";

import { Link } from "react-router-dom";

class Search extends React.Component {
  state = {
    query: "",
    tracks: [],
    loading: false,
  };
  componentDidMount = async () => {};
  componentDidUpdate = () => {};
  changeHandler = (e) => {
    this.setState({ query: e.target.value });

    this.props.SetQuery(this.state.query);
  };

  render() {
    return (
      <div className="wrap-search">
        <input
          className="input"
          id="query"
          value={this.state.query}
          onClick={() => {
            this.setState({ query: "" });
          }}
          placeholder="search"
          onChange={this.changeHandler}
        />{" "}
        {/* //<Link to="/detail">
          {" "}
          <div className="search-btn">
            <button className="search-icon"></button>
          </div>
         
        </Link */}
      </div>
    );
  }
}
export default Search;
