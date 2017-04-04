// Libs
import React, { Component } from 'react';
// Components
import DblFeatureA from '../components/dblfeatureA.js';
import DblFeatureB from '../components/dblfeatureB.js';
import TripleFeature from '../components/triplefeature.js';
import features from '../components/features.js';

export default class Supporting extends Component {
	render() {
		const tripleContent = features.Triple;
    const triples = tripleContent.map((triple) => {
      return <TripleFeature img1={triple.img1}
						 								img2={triple.img2}
														img3={triple.img3}
														key={triple.id}/>
    });
		const doubleContent = features.Double;
		let doubleA = [];
		let doubleB = [];
		doubleContent.forEach(function(obj) {
			obj.id % 2 === 0 ?
				doubleA.push(obj)
				:
				doubleB.push(obj);
		});
    doubleA = doubleA.map((double) => {
      return <DblFeatureA img1={double.img1}
													img2={double.img2}
													key={double.id}/>
    });
		doubleB = doubleB.map((double) => {
      return <DblFeatureB img1={double.img1}
													img2={double.img2}
													key={double.id}/>
    });
		return(
			<div className="supporting">
				<div className="container">
					<h2>A world of movies at your fingertips.</h2>
					<p>Choose from the latest titles, with new movies added every day.</p>
				</div>
				{
					doubleA.concat(doubleB).sort(function(a, b){ return a.key - b.key })
				}
				{ triples }
			</div>
		);
	}
}
