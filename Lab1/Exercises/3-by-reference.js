'use strict';

const inc = (num) => {
    num.n += 1;
};

module.exports = { inc };

const obj = { n: 5 };
inc(obj);
console.dir(obj);
