import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./style/index.css";
import React from "react";
import Search from "./components/Search";
import { Link } from "react-router-dom";

import { Route } from "react-router-dom";
import MusicStore from "./components/MusicStore";
import { useState } from "react";

function App() {
  const [query, SetQuery] = useState("");
  return (
    <>
      <div className="container margin-top">
        <div className="row">
          <div className="col-sm-12 text-center background-div">
            <Link to="/">
              <h1>Music-Search</h1>
            </Link>
          </div>
        </div>
        <hr />

        <Route
          exact
          path="/"
          render={(props) => <Search SetQuery={SetQuery} />}
        />

        <Route
          exact
          path="/detail"
          render={(props) => (
            <MusicStore {...props} query={query} SetQuery={SetQuery} />
          )}
        />
      </div>
    </>
  );
}

export default App;
