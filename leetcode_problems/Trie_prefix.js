function Trie() {
	const root = {};
	return { insert, search, startsWith };

	function insert(word) {
		let curr = root;
		word.split('').forEach(ch => 
			{
				if(curr[ch]){
				curr = curr[ch]; // Actually curr = curr[ch] = curr[ch] 
			} else {
				curr[ch] = {};
				curr = curr[ch]; 
				// Same as curr = curr[ch] = {}
			}
			}); //wtf...?
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



/**
 * Initialize your data structure here.
 */
var Trie = function() {
   
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
 
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */