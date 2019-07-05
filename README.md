# afu

**a**shnamuh's **f**unctional **u**tilities

## Usage
It requires Nodejs 10 higher.

Install

```bash
npm install afu
```


Functions

See test.js

```js
import { add } from 'afu'

console.log(add(1, 2)) // 3

const add10 = add(10) // currilized
console.log(add10(6)) // 6
```
