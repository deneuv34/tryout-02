import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      items: [],
      text: '',
    }
  }

  handleChange(e) {
    this.setState({text: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    var newItem = {
      text: this.state.text,
      id: Date.now()
    };

    this.setState((prevState) => ({
      items: prevState.items.concat(newItem),
      text: ''
    }));
  }

  render() {
    return (
      <div className='App'>
        <h3 className='App-header'>TODO APP</h3>
        <div className='App-intro'>
          <ul>
            {this.state.items.map(item => (
              <li key={item.id}>{item.text}</li>
            ))}
          </ul>
        </div>
        <div className='App-intro'>
          <form onSubmit={this.handleSubmit}>
            <input onChange={this.handleChange} value={this.state.text} />
            <button>{'New Todo #' + (this.state.items.length + 1)}</button>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
