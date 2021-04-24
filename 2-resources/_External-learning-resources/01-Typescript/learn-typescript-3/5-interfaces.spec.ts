import Address from './5a-address';
import DinoPark from './5a-dino-park';
import { strict as assert } from 'assert';
import {createParkSlug} from './5b-create-park-slug'
import 'mocha';

describe('Interfaces', () => {

	function checkAddress(address: Address) {
		var keys = Object.keys(address);
		assert.deepEqual(keys, ["street","city","state","zip"]);
	}

	it('Address', () => {

		checkAddress({
			street: '123 Main',
			city: 'Sandusky',
			state: 'Ohio',
			zip: '12345'
		});
	});

	it('DinoPark', () => {

		function checkFullDinoPark(dinoPark: DinoPark) {
			var keys = Object.keys(dinoPark);
			assert.deepEqual(keys, ["name","image","address"], "has an image");
			checkAddress(dinoPark.address);
		}

		checkFullDinoPark({
			name: "Isla Sorna Park",
			image: "http://dino.com/pic.jpg",
			address: {
				street: '123 Main',
				city: 'Sandusky',
				state: 'Ohio',
				zip: '12345'
			}
		});

		function checkPartialDinoPark(dinoPark: DinoPark) {
			var keys = Object.keys(dinoPark);
			assert.deepEqual(keys, ["name","address"], "optional image");
			checkAddress(dinoPark.address);
		}
		checkPartialDinoPark({
			name: "Isla Sorna Park",
			address: {
				street: '123 Main',
				city: 'Sandusky',
				state: 'Ohio',
				zip: '12345'
			}
		});
	});

	it('createParkSlug', function(){
		let result = createParkSlug({
			name: "Isla Sorna Park",
			address: {
				street: '123 Main',
				city: 'Sandusky',
				state: 'Ohio',
				zip: '12345'
			}
		});
		assert.equal(result, "Isla-Sorna-Park", "slug works");
	});

});
