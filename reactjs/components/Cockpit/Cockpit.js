import React from "react";
import Radium from "radium";
import "./Cockpit.css";
import Persons from "../Persons/Persons.js";

const cockpit = props => {
  const style = {
    backgroundColor: "green",
    color: "white",
    font: "inherit",
    border: "1px solid blue",
    padding: "8px",
    cursor: "pointer",
    ":hover": {
      backgroundColor: "lightgreen",
      color: "black"
    }
  };
  if (props.showPersons) {
    style.backgroundColor = "red";
    style[":hover"] = {
      backgroundColor: "salmon",
      color: "black"
    };
  }

  const assignedClasses = [];

  if (props.persons.length <= 2) {
    console.log("elo");
    assignedClasses.push("red"); // assignedClasses = ['red']
  }
  if (props.persons.length <= 1) {
    assignedClasses.push("bold"); // assignedClasses = ['red', 'bold']
  }
  return (
    <div>
      <h1>Hi, Im a React App</h1>
      <p className={assignedClasses.join(" ")}>This is really working!</p>
      <button style={style} onClick={props.clicked}>
        Toggle Persons
      </button>
    </div>
  );
};

export default Radium(cockpit);
