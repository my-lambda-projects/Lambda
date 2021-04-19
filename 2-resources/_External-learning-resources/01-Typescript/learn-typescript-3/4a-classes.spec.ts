import DinoKeeper from './4a-classes-hello-dino';
import { strict as assert } from 'assert';
import 'mocha';

describe('Classes: DinoKeeper', () => {

	it('basics work', () => {
		var dinoKeeper = new DinoKeeper("Joe");
		assert.equal(dinoKeeper.sayHi() , `Joe says "hi"`);
	});

	it('typing works', () => {
		var dinoKeeper = new DinoKeeper("Joe") as DinoKeeper;
		assert.equal(dinoKeeper.sayHi() , `Joe says "hi"`);
	});

});
