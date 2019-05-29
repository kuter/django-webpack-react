import React, { Component } from "react";
import Radium from "radium";

import Aux from "../../../hoc/Aux";
import "./Person.css";

class Person extends Component {
  render() {
    console.log("[Person.js] rendering ..");
    return (
      // <div className="Person">
      <Aux>
        <p onClick={this.props.click}>
          I'm a {this.props.name} and I am {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.userName}
        />
      </Aux>
      // </div>
    );
  }
}
// const person = props => {
//   console.log("[Person.js] rendering ..");
//   const styles = {
//     "@media (min-width: 500px)": {
//       backgroundColor: "lightblue"
//     },
//     "@media (min-width: 1000px)": {
//       backgroundColor: "lightyellow"
//     }
//   };
// };

export default Person;
