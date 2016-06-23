import wmur from './wmur.js'

const options = {
	'wmur': wmur,
}

export default ({ text, station }) =>
	options[station](text)