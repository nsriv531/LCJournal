/*
LeetCode-style prompt:
Design a HashMap without using any built-in hash table libraries.

Implement the MyHashMap class:
- MyHashMap() initializes the object.
- void put(int key, int value) inserts a (key, value) pair into the HashMap. If the key already exists, update the value.
- int get(int key) returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key.
- void remove(int key) removes the key and its corresponding value if the map contains the mapping for the key.
*/

class MyHashMap {
    constructor() {
        this.size = 1000;
        this.buckets = Array.from({ length: this.size }, () => []);
    }

    _hash(key) {
        return key % this.size;
    }

    put(key, value) {
        const idx = this._hash(key);
        for (let pair of this.buckets[idx]) {
            if (pair[0] === key) {
                pair[1] = value;
                return;
            }
        }
        this.buckets[idx].push([key, value]);
    }

    get(key) {
        const idx = this._hash(key);
        for (let pair of this.buckets[idx]) {
            if (pair[0] === key) return pair[1];
        }
        return -1;
    }

    remove(key) {
        const idx = this._hash(key);
        this.buckets[idx] = this.buckets[idx].filter(pair => pair[0] !== key);
    }
}

// Example usage:
const map = new MyHashMap();
map.put(1, 2);
map.put(2, 3);
console.log(map.get(1)); // 2
console.log(map.get(3)); // -1
map.put(2, 4);
console.log(map.get(2)); // 4
map.remove(2);
console.log(map.get(2)); //