// Libs
import React, { Component } from 'react';
// Components

export default class Main extends Component {
	render() {
		return(
			<div className='main'>
				<h1>Watch your favorite movies, instantly.</h1>
				<a className={['btn','btn-default'].join(' ')} href="/">Learn More</a>
				<form className="form-inline">
					<div className="form-group">
						<input type="text" className="form-control" id="search" placeholder="Browse the collection" />
					</div>
					<a><button type="submit" className={['btn','btn-submit'].join(' ')} href="">Search</button></a>
				</form>
			</div>
		);
	}
}
