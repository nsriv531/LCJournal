
#include <iostream>
#include <vector>
#include <list>
#include <utility>
using namespace std;

// Simple HashMap implementation (separate chaining)
class HashMap {
    static const int SIZE = 1000;
    vector<list<pair<int, int>>> table;
public:
    HashMap() : table(SIZE) {}

    // Insert or update key-value
    void put(int key, int value) {
        int idx = key % SIZE;
        for (auto& kv : table[idx]) {
            if (kv.first == key) {
                kv.second = value;
                return;
            }
        }
        table[idx].emplace_back(key, value);
    }

    // Get value by key, return -1 if not found
    int get(int key) {
        int idx = key % SIZE;
        for (auto& kv : table[idx]) {
            if (kv.first == key) return kv.second;
        }
        return -1;
    }

    // Remove key-value pair
    void remove(int key) {
        int idx = key % SIZE;
        for (auto it = table[idx].begin(); it != table[idx].end(); ++it) {
            if (it->first == key) {
                table[idx].erase(it);
                return;
            }
        }
    }
};

// Example usage
int main() {
    HashMap hm;
    hm.put(1, 10);
    hm.put(2, 20);
    cout << "Get 1: " << hm.get(1) << endl; // 10
    cout << "Get 3: " << hm.get(3) << endl; // -1
    hm.put(2, 30);
    cout << "Get 2: " << hm.get(2) << endl; // 30
    hm.remove(2);
    cout << "Get 2 after remove: " << hm.get(2) << endl; // -1
    return 0;
}
