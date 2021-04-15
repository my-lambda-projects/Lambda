import {dnaCost} from './3-functions-dnaCost';
import { strict as assert } from 'assert';
import 'mocha';

describe('Functions: dnaCost', () => {

	it('can be called with two arguments', () => {
		assert.equal( dnaCost(2500, 'abc'), 2503);
	});

	it('can be called with many arguments', () => {
		assert.equal( dnaCost(2500, 'abc', 'de', 'f'), 2506);
	});

});
