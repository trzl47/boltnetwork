// Libs
import React, { Component } from 'react';
// Components
import Jumbotron from './Jumbotron.js';
import Supporting from './Supporting.js';
import Banner from '../components/Banner.js';

export default class Home extends Component {
	render() {
		return(
			<div className='boltnetwork'>
				<Jumbotron />
				<Supporting />
				<Banner />
			</div>
		);
	}
}
