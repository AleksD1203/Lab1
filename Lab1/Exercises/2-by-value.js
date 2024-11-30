'use strict';

const inc = (n) => n + 1;

module.exports = { inc };

const a = 5;
const b = inc(a);
console.dir({ a, b });
