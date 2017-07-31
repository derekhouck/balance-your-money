import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Header extends Component {
	render() {
		return (
			<div className="App-header">
			  <h1>Balance Your Money</h1>
			</div>
		);
	}
}

class Main extends Component {
	render() {
		return (
			<main>
				<p className="App-intro">
				  To get started, edit <code>src/App.js</code> and save to reload.
				</p>
				<h2>Income</h2>
				<h2>Needs</h2>
				<h2>Savings</h2>
				<h2>Wants</h2>
			</main>
		);
	}
}

class App extends Component {
  render() {
    return (
      <div className="App">
		<Header />
		<Main />
      </div>
    );
  }
}

export default App;
