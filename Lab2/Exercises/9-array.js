'use strict';

/* Collections: Array, Hash (Object)

Implement phone book using array of records.
- Define Array of objects with two fields: `name` and `phone`.
Object example: `{ name: 'Marcus Aurelius', phone: '+380445554433' }`.
- Implement function `findPhoneByName` with signature
`findPhoneByName(name: string): string`. Returning phone from that object
where field `name` equals argument `name`. Use `for` loop for this search. */

const phonebook = [
    { name: 'Aleksandr', phone: '+380502253465' },
    { name: 'Maksim', phone: '+380764563214' },
    { name: 'Marcus', phone: '+380673314532' },
    { name: 'Donald', phone: '+380703234645' },
]

const findPhoneByName = (name) => {
    for(let i = 0; i < phoneBook.length; i++) {
        if(phoneBook[i].name === name) return phoneBook[i].phone
    }
};

module.exports = { phonebook, findPhoneByName };
