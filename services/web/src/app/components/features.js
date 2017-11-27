let count = 0;
const Features = {
  'Double':[
    {
			img1: require('../../static/img/the-avengers.jpg'),
			img2: require('../../static/img/harry-potter.jpg'),
			id: count++
    },
    {
			img1: require('../../static/img/lord-of-the-rings.jpg'),
			img2: require('../../static/img/skyfall.jpg'),
			id: count++
    },
  ],
	'Triple':[
    {
			img1: require('../../static/img/frozen.jpg'),
			img2: require('../../static/img/iron-man.jpg'),
			img3: require('../../static/img/transformers.jpg'),
			id: count++
    },
    {
			img1: require('../../static/img/the-dark-knight.jpg'),
			img2: require('../../static/img/pirates-of-the-caribbean.jpg'),
			img3: require('../../static/img/toy-story-3.jpg'),
			id: count++
    },
  ],
};

export default Features;
