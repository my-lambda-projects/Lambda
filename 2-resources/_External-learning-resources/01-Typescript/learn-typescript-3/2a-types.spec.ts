import { strict as assert } from 'assert';
import 'mocha';
import {isLoading, inventory, tom, jessica } from "./2a-fix-errors";

describe('Types: Exercise 1: Fix errors', () => {

	it("exports are correct", function(){
		assert.equal( isLoading, false,
			"isLoading");

		assert.deepEqual(
			inventory,
			['tacos', 'hamburgers'],
			"inventory");

		assert.equal(jessica,
			`Jessica is 30 years young.`,
			"jessica");

		assert.equal(tom,
			`Tom is 42 years young.`,
			"Tom");
	});

});
