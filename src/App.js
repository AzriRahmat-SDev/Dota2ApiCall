import React, { Component } from 'react';
import CardList from './components/CardList';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			heroes: [],
			isLoaded: false,
		};
	}

	componentDidMount() {
		fetch('https://api.opendota.com/api/heroStats')
			.then((response) => response.json())
			.then((data) => this.setState({ heroes: data, isLoaded: true }));
	}

	render() {
		var { heroes, isLoaded } = this.state;

		if (!isLoaded) {
			return <div>is loading</div>;
		}
		return (
			<div className="heroes" id="heroes">
				<CardList heroes={heroes} />
			</div>
		);
	}
}

export default App;
