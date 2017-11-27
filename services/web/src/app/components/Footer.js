// Libs
import React from 'react';
// Components
import { Link } from 'react-router-dom';

const Footer = () => {
		return (
			<footer>
			<div className='footer'>
				<div className='container'>
					<div className='row'>
						<div className="col-md-3">
							<h3>Bolt</h3>
							<ul>
								<li><Link to="/Careers">Careers</Link></li>
								<li><Link to="/Terms">Terms</Link></li>
								<li><Link to="/Help">Help</Link></li>
							</ul>
						</div>
						<div className="col-md-3">
							<h3>More Bolt</h3>
							<ul>
								<li><Link to="/GiftCards">Gift Cards</Link></li>
								<li><Link to="/Trailers">Trailers</Link></li>
							</ul>
						</div>
						<div className="col-md-3">
							<h3>News</h3>
							<ul>
								<li><Link to="/Blog">Blog</Link></li>
								<li><Link to="/Twitter">Twitter</Link></li>
								<li><Link to="/YouTube">YouTube</Link></li>
								<li><Link to="/Google">Google</Link></li>
								<li><Link to="/Facebook">Facebook</Link></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			</footer>
		);
	}

export default Footer;
