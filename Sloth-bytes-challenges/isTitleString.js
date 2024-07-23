const checkTitle = (title) => {
	for (const word of title.split(' ')) {
		if (word[0] == word[0].toLowerCase()) {
			return false;
		}
	}

	return true;
};

console.log(checkTitle('A Mind Boggling Achievement'));
console.log(checkTitle('A Simple C++ Program'));
console.log(checkTitle('Water is transparent'));