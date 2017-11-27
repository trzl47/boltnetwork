// Libs
import React from 'react';
// Components
import { Link } from 'react-router-dom';

const Header = () => {
		return (
			<header>
			<div className='header'>
				<div className='container'>
					<nav>
					<div className='row'>
						<div className="col-md-2">
							<img alt='' role='presentation' src={require('../../static/img/logo.svg')} width="180" height="34" />
						</div>
						<div className={['pull-right'].join(' ')}>
							<ul>
								<li><Link to="/login">Log in</Link></li>
								<li><Link className="btn btn-default" to="/signup">Sign up</Link></li>
							</ul>
						</div>
					</div>
					</nav>
				</div>
			</div>
			</header>
		);
	};

export default Header;
