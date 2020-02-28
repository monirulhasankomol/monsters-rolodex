
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();



/*
import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor() {
    super()
    this.handleclick2 = this.handleclick1.bind(this)
  }
  handleclick1() {
    console.log('button 1 clicked');
  }

  handleclick3 = () => { console.log('button 3 clicked'); }

  render() {
    return (
      <div>
        <button onClick={this.handleclick1()}>Click 1</button>
        <button onClick={this.handleclick1}>Click 2</button>
        <button onClick={this.handleclick2}>Click 3</button>
        <button onClick={this.handleclick3}>Click 4</button>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
*/