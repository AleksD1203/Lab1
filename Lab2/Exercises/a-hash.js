'use strict';

/* 10. Implement phone book using hash (also known as `object`).
- Define hash with `key` contains `name` (from previous example) and `value`
contains `phone`.
- Implement function `findPhoneByName` with signature
`findPhoneByName(name: string): string`. Returning phone from hash/object.
Use `hash[key]` to find needed phone. */

const phonebook = new Map()

phonebook.set('Aleksandr', '+380502253465')
phonebook.set('Maksim', '+380764563214')
phonebook.set('Marcus', '+380673314532')
phonebook.set('Donald', '+380703234645')


const findPhoneByName = (name) => phonebook.get(name);

module.exports = { phonebook, findPhoneByName };
