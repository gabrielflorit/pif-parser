'use strict';

// expect that this will take in a pdf text
function wmur (text) {

	console.log('asdf')

}

var options = {
	'wmur': wmur,
}

function main (ref) {
		var text = ref.text;
		var station = ref.station;

		return options[station](text);
}

module.exports = main;