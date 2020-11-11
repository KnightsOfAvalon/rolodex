import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';

class App extends Component { 
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
      
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
      .catch((err) => console.log(err));
  }

  render() {
    /*Destructuring...*/ 
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
      )
    /* Ava 11/10/2020 - The h2 in this return statement was written to ensure 
    that App.js would pass the test in App.test.js */
    return (
      <div className='App'>
        <h1> Rolodex </h1>
        <h2> Getting started with React testing library </h2>
        <SearchBox
          placeholder='search'
          handleChange={e => 
            this.setState({ searchField: e.target.value })}
        />

        <CardList monsters={filteredMonsters} />
      </div>
    );
   }
}

export default App;
