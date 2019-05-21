import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';



class App extends Component {
    state = {
        persons: [
            {id: 'abc1', name: 'Max', age: 28},
            {id: 'def2', name: 'Manu', age: 29},
            {id: 'gfi3', name: 'Stephanie', age: 26}
        ],
        username: 'supermax',
        showPersons: false
    }

    deletePersonHandler = (personIndex) => {
        console.log('elo ' + personIndex);
        // const persons = this.state.persons;
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons: persons})
    }

    nameChangedHandler = (event, id) => {
        console.log('elo was changed' + id);
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });

        const person = {
            ...this.state.persons[personIndex]
        };
        // const person = Object.assign({}, this.state.persons[personIndex]);

        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;
        
        this.setState({
            persons: persons
        })
    }

    togglePersonHandler = () => {
        console.log('elo');
        const doesShow = this.state.showPersons
        this.setState(
            {showPersons: !doesShow}
        );
    };
    render() {
        const style = {
            backgroudColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer',
        };

        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                    return <Person 
                        click={() => this.deletePersonHandler(index)}
                        name={person.name} 
                        age={person.age} 
                        key={person.id}
                        changed={(event) => this.nameChangedHandler(event, person.id)}
                    />
                    })}
                </div>             
            );
        }

        return (
            <div className="App">
                <h1>Hi, Im a React App1</h1>
                <p>This is really working!</p>

                <button 
                    style={style}
                    onClick={this.togglePersonHandler}>Toggle Persons</button>
                {persons}
            </div>
                );
                // return React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'Hello World !!'));
    }
}

export default App;
