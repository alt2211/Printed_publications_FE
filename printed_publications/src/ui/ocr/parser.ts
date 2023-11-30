const Parser = (str: string[]) => {
	let result: string[] = []
	str.forEach(element => {
		if(element === 'УДК')
			result[0] = element
	});
	return result;
} 

export default Parser;