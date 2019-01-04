import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export const Sidebar = () => (
  <sidebar className="sidebar">
    <h4>&nbsp;Sidebar</h4>
    <div>
      <ul>
        <li>
          <b>Home</b>
        </li>
        <li>
          <b>About</b>
        </li>
      </ul>
      {/*<Route path={`/${this.constructor.name}/home`} component={Home} />
        <Route path={`/${this.constructor.name}/about`} component={About} />*/}
    </div>
  </sidebar>
);
