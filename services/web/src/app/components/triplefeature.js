import React from 'react';

const TripleFeature = props => (
  <div className="row">
		<div className="col-md-4">
			<img className="thumbnail" alt='' role='presentation' src={props.img1} />
		</div>
		<div className="col-md-4">
			<img className="thumbnail" alt='' role='presentation' src={props.img2} />
		</div>
		<div className="col-md-4">
			<img className="thumbnail" alt='' role='presentation' src={props.img3} />
		</div>
  </div>
);

export default TripleFeature;
