import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class Layout3 extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <b>財力1</b>
              {/*<Link to={`/${this.constructor.name}/home`}>Home</Link>*/}
            </li>
            <li>
              <b>財力2</b>
              {/*<Link to={`/${this.constructor.name}/about`}>About</Link>*/}
            </li>
            <li>
              <b>財力3</b>
            </li>
          </ul>
          {/*<Route path={`/${this.constructor.name}/home`} component={Home} />
          <Route path={`/${this.constructor.name}/about`} component={About} />*/}
        </div>
      </Router>
    );
  }
}
