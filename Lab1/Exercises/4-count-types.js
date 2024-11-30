'use strict';

let array = [true, 'hello', 5, 12, -200, false, false, 'word', 3.14, { key: 'value' }, [1, 2], undefined, null];
let typeCounts = {};
for (let element of array) {
  let type = typeof element; 
  if (!typeCounts[type]) {
    typeCounts[type] = 0;
  }
  typeCounts[type] += 1;
}

console.log(typeCounts);
