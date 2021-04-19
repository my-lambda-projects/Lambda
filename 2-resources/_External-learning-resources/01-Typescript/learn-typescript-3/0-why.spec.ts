import { strict as assert } from 'assert';
import 'mocha';
import {readFileSync} from 'fs';
import {join} from 'path';

describe('Why', () => {

	it('0-why-hello-world.ts exists', () => {
		var file = readFileSync(join(__dirname,"0-why-hello-world.ts"));
		if(file && file.toString()) {
			assert.ok(true, "There is a file");
		} else {
			assert.ok(false, "There is no file or it is empty");
		}
	});

	it('0-why-hello-world.js is built and updates the body', () => {
		eval(`
			global.document = {body: {innerHTML: ""}}
		`)
		require("./0-why-hello-world");
		assert.equal(document.body.innerHTML, "Hello, World")
	});

});
