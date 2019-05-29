import React, { Component } from "react";
import "./App.css";
import Radium, { StyleRoot } from "radium";
import Cockpit from "../components/Cockpit/Cockpit";
import Persons from "../components/Persons/Persons";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App.js] constructor");
  }

  state = {
    persons: [
      { id: "abc1", name: "Max", age: 28 },
      { id: "def2", name: "Manu", age: 29 },
      { id: "gfi3", name: "Stephanie", age: 26 }
    ],
    username: "supermax",
    showPersons: false,
    showCockpit: true
  };

  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] getDerivedStateFromProps", props);
    return state;
  }

  componentDidMount() {
    console.log("[App.js] componentDidMount here");
  }

  componentDidUpdate() {
    console.log("[App.js] componentDidUpdate");
  }

  shouldComponentUpdate() {
    console.log("[App.js] shouldComponentUpdate");
    return true;
  }

  // componentWillMount() {
  //   console.log("[App.js] componentWillMount");
  // }

  deletePersonHandler = personIndex => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    console.log("[App.js] render() method");
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
          />
        </div>
      );
    }

    return (
      <StyleRoot>
        <div className="App">
          <button
            onClick={() => {
              this.setState({ showCockpit: false });
            }}
          >
            Remove Cockpit
          </button>
          {this.state.showCockpit ? (
            <Cockpit
              title={this.props.appTitle}
              persons={this.state.persons}
              showPersons={this.state.showPersons}
              personsLength={this.state.persons.length}
              clicked={this.togglePersonHandler}
            />
          ) : null}
          {persons}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
