import { EOL } from 'os'
import _ from 'lodash'

const extractBlocks = (lines) => {

	// first phase: get beginning lines
	const beginningIndices = lines.map((line, index) => ({
		line,
		index,
	}))
	.filter(value => /^\s*Start\/End/.test(value.line))
	.map(value => value.index)

	// second phase: slice lines into many "outer" blocks
	const outerBlocks = beginningIndices.map((index, i, array) => {
		return i === array.length - 1 ?
			lines.slice(index) :
			lines.slice(index, array[i + 1] - 1)
	})

	// third phase: get outer block ending lines
	const endingIndices = outerBlocks.map(block =>
		_.findIndex(block, line => /^\s*$/.test(line)))

	// fourth phase: slice outer blocks into blocks
	const blocks = endingIndices.map((index, i, array) =>
		outerBlocks[i].slice(0, index))

	return blocks

}

export default (text) => {

	const lines = text.split(EOL)

	const blocks = extractBlocks(lines)

	return blocks

}
