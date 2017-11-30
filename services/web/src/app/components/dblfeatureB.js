import React from 'react';

const DblFeatureB = props => (
  <div className="row">
		<div className="col-md-4">
			<img className="thumbnail" alt='' src={props.img1} />
		</div>
		<div className="col-md-8">
			<img className="thumbnail" alt='' src={props.img2} />
		</div>
  </div>
);

export default DblFeatureB;
