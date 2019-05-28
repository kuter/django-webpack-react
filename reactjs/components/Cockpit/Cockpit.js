import React, { useEffect } from "react";
import Radium from "radium";
import "./Cockpit.css";
import Persons from "../Persons/Persons.js";

const cockpit = props => {
  useEffect(() => {
    console.log("[Cocpit.js] useEffect()");
    // Http request
    setTimeout(() => {
      alert("saved data to cloud!");
    }, 1000);
    // }, [props.persons]); // on props.persons change
    return () => {
      console.log("[Cocpit.js] cleanup work in useEffect");
    };
  }, []); // only once, componentDidMount

  useEffect(() => {
    console.log("[Cocpit.js] 2nd useEffect()");
    return () => {
      console.log("[Cocpit.js] 2nd cleanup work in useEffect");
    };
  });

  const assignedClasses = [];

  if (props.persons.length <= 2) {
    assignedClasses.push("red"); // assignedClasses = ['red']
  }
  if (props.persons.length <= 1) {
    assignedClasses.push("bold"); // assignedClasses = ['red', 'bold']
  }
  return (
    <div>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(" ")}>This is really working!</p>
      <button onClick={props.clicked}>Toggle Persons</button>
    </div>
  );
};

export default cockpit;
