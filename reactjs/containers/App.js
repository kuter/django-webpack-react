import React, { Component } from "react";
import "./App.css";
import Radium, { StyleRoot } from "radium";
import Cockpit from "../components/Cockpit/Cockpit";
import Person from "../components/Persons/Person/Person";
import Persons from "../components/Persons/Persons";

class App extends Component {
  state = {
    persons: [
      { id: "abc1", name: "Max", age: 28 },
      { id: "def2", name: "Manu", age: 29 },
      { id: "gfi3", name: "Stephanie", age: 26 }
    ],
    username: "supermax",
    showPersons: false
  };

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
          <Cockpit
            persons={this.state.persons}
            showPersons={this.state.showPersons}
            clicked={this.togglePersonHandler}
          />
          {persons}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
