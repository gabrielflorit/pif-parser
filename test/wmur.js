const expect = require('chai').expect
const path = require('path')
const fs = require('fs')

const main = require('./../build/index.js')

// read in wmur
const input = fs.readFileSync(
	path.join(__dirname, './fixtures', 'wmur.txt'), 'utf8')

describe('WMUR', function() {

	const output = main({ text: input, station: 'wmur' })

	it('should have 15 entries', function() {

		expect(output.length).to.deep.equal(15)

	})

})
