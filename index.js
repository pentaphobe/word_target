
(function() {
	var	fs = require('fs'),
		path = require('path');


	function randomInt(max) {
		return Math.floor( Math.random() * max );
	}

	function randomWord() {
		return wordList[randomInt(wordList.length)];
	}

	function shuffle(word) {
		var buffer = '';

		while (word.length > 0) {
			var idx = randomInt(word.length),
				chr = word[idx];
			word = word.slice(0, idx) + word.slice(idx+1);
			buffer += chr;
		}
		return buffer;
	}

	function printAsTarget(word) {
		var txt = '';
		for (var i=0; i < word.length; i++) {
			if (i % 3 === 0) {
				txt += '\n';
			}
			txt += ' ' + word[i] + ' ';
		}
		txt += '\n';
		console.log(txt);
	}

	process.chdir(__dirname);

	var wordList = fs.readFileSync('wordlist.txt', {encoding:'utf8'}).split(/\n/),
		word = randomWord(),
		shuffled = shuffle(word);

	fs.writeFileSync('lastword.txt', word);

	printAsTarget(shuffled);

}());
