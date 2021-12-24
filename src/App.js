import React, { Component, Fragment } from 'react';
import CardList from './components/CardList';
import CardDetailWrap from './components/CardDetailWrap';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
			.then((data) => {
				this.setState({ heroes: data, isLoaded: true });
			});
	}

	render() {
		var { heroes, isLoaded } = this.state;

		if (!isLoaded) {
			return <div>is loading</div>;
		}
		return (
			<Fragment>
				<Router>
					<Header />
					<Routes>
						<Route
							path="/heroes/*"
							element={<CardDetailWrap heroes={heroes} />}
						></Route>
						<Route
							path="/"
							exact
							element={<CardList heroes={heroes} />}
						></Route>
					</Routes>
				</Router>
			</Fragment>
		);
	}
}

export default App;
