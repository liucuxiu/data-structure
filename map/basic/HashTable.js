class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  get(key) {
    let address = this._hash(key)
    const currentBucket = this.data[address]
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i]
        }
      }
    }
    return undefined
  }

  set(key, value) {
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
  }

  keys() {
    const keyArray = []
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        console.log(i)
        keyArray.push(this.data[i][0][0])
      }
    }
    return keyArray
  }

}

const myHashTable = new HashTable(50);
myHashTable._hash('grapes');
myHashTable.set('grapes', 1);
myHashTable.set('apple', 2);
myHashTable.set('orange', 3);
console.log(myHashTable.keys())
console.log(myHashTable);