function Trie() {
	const root = {};
	return { insert, search, startsWith };

	function insert(word) {
		let curr = root;
		word.split('').forEach(ch => curr = curr[ch] = curr[ch] || {}); //wtf...?
		curr.isWord = true;
	}

	function traverse(word) {
		let curr = root;
		for (var i = 0; i < word.length; i++) {
			if (!curr) return null;
			console.log([word[i]])
			curr = curr[word[i]];
		}
		return curr;
	}

	function search(word) {
		let node = traverse(word);
		return !!node && !!node.isWord;
	}

	function startsWith(word) {
		return !!traverse(word);
	}
}

let tt = new Trie();
console.log(tt)

tt.insert('hello')
console.log(tt.search('hell'))
console.log(tt.startsWith('hel'))
