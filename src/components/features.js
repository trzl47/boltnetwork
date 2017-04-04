let count = 0;
const Features = {
  "Double":[
    {
			img1: require('./assets/the-avengers.jpg'),
			img2: require('./assets/harry-potter.jpg'),
			id: count++
    },
    {
			img1: require('./assets/lord-of-the-rings.jpg'),
			img2: require('./assets/skyfall.jpg'),
			id: count++
    },
  ],
	"Triple":[
    {
			img1: require('./assets/frozen.jpg'),
			img2: require('./assets/iron-man.jpg'),
			img3: require('./assets/transformers.jpg'),
			id: count++
    },
    {
			img1: require('./assets/the-dark-knight.jpg'),
			img2: require('./assets/pirates-of-the-caribbean.jpg'),
			img3: require('./assets/toy-story-3.jpg'),
			id: count++
    },
  ],
};

export default Features;
