import { OptionsType } from './types'

const getType = (optionsLen: string[]) => {
	const index = Math.trunc(Math.random() * optionsLen.length)
	return optionsLen[index]
}

function getChar(options: OptionsType) {
	const arr = Object.entries(options)
		.filter(f => f[1] && f[0] !== 'len')
		.map(value => value[0])

	const type = getType(arr)

	switch (type) {
		case 'abc':
			return String.fromCharCode(Math.random() * (122 - 97) + 97)
		case 'upperAbc':
			return String.fromCharCode(Math.random() * (90 - 65) + 65)
		case 'numeric':
			return String.fromCharCode(Math.random() * (57 - 48) + 48)
		case 'symbols':
			return String.fromCharCode(Math.random() * (47 - 33) + 33)
	}
	return ''
}

export function generatorPassword(options: OptionsType) {
	const password = []

	for (let i = 0; i < options.len; i++) {
		password.push(getChar(options))
	}

	return password.join('')
}
