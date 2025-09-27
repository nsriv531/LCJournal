class TrieNode {
  constructor() {
    this.children = new Map(); // char -> TrieNode
    this.isEnd = false;        // marks a completed word
  }
}

class WordDictionary {
  constructor() {
    this.root = new TrieNode();
  }

  addWord(word) {
    let node = this.root;
    for (const ch of word) {
      if (!node.children.has(ch)) node.children.set(ch, new TrieNode());
      node = node.children.get(ch);
    }
    node.isEnd = true;
  }

  search(pattern) {
    const dfs = (idx, node) => {
      if (!node) return false;
      if (idx === pattern.length) return node.isEnd;

      const ch = pattern[idx];

      if (ch === '.') {
        // try all children
        for (const [, child] of node.children) {
          if (dfs(idx + 1, child)) return true;
        }
        return false;
      } else {
        // follow the exact edge
        return dfs(idx + 1, node.children.get(ch));
      }
    };

    return dfs(0, this.root);
  }
}

// --- Example usage ---
const dict = new WordDictionary();
dict.addWord("bad");
dict.addWord("dad");
dict.addWord("mad");

console.log(dict.search("pad")); // false
console.log(dict.search("bad")); // true
console.log(dict.search(".ad")); // true
console.log(dict.search("b..")); // true
