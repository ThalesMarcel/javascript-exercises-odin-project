function findAllElementIndexes(array, element) {
	const indexes = [];
	let i = array.indexOf(element);

	while (i !== -1) {
		indexes.push(i);
		i = array.indexOf(element, ++i);
	}

	return indexes;
}

const removeFromArray = function(array, ...elements) {
	const result = array;
	const indexes = new Array(elements.length);

	for (let i = 0; i < elements.length; i++) {
		indexes[i] = findAllElementIndexes(result, elements[i]);
		for (let j = 0; j < indexes[i].length; j++)
			result.splice(indexes[i][j], 1);
	}

	return result;
};

// Do not edit below this line
module.exports = removeFromArray;
