import { strict as assert } from 'assert';
import 'mocha';
import {readFileSync} from 'fs';
import {join} from 'path';

describe('IDE (import and export)', () => {

	it('Updates document.body.innerHTML', () => {
		eval(`
			global.document = {body: {innerHTML: ""}}
		`)
		require("./1-ide-hello-earth");
		assert.equal(document.body.innerHTML, "Hello, Earth");
	});

});
