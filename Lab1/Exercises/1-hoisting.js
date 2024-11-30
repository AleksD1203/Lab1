'use strict';

const fn = () => {
  try {
    console.log({ a });
    var a = 5;
  } catch (error) {
    console.error(error.message);
  }
};

fn();
