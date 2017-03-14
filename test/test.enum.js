
SJTest.run({name:'Enum',

	simpleTest: function() {
		let FRUIT = new Enum("APPLE PEAR");
		assert(FRUIT.APPLE);
		assert(FRUIT.APPLE === 'APPLE');
		assert( ! FRUIT.CHAIR);
		assert(FRUIT.isAPPLE('APPLE'));
		assert(FRUIT.has('APPLE'));
		assert( ! FRUIT.has('legs'));
	}

});