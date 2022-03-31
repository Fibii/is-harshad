### Harshad Number
A positive integer which is divisible by the sum of its digits, also called a Niven number (Kennedy et al. 1980) or a multidigital number (Kaprekar 1955). [read more](https://en.wikipedia.org/wiki/Harshad_number)

### Usage
```javascript
const { isHarshad } = require('is-harshad')

console.log(isHarshad(100)) // true
console.log(isHarshad(104)) // false
console.log(isHarshad(1)) // true
console.log(isHarshad(-1)) // false
```
