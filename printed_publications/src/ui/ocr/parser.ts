const parseTextByRegex = (text: string) => {
	let array = text.split(' ')
	let result = new Map()

	for (let i = 0; i < array.length; i++) {
		switch (array[i]) {
			case 'УДК':
				result.set('УДК', array[i + 1])
				break
			case 'ББК':
				result.set('ББК', array[i + 1])
				break
			case '15ВМ':
				result.set('15ВМ', array[i + 1])
				break
		}
	}
	return result
}
export default parseTextByRegex
