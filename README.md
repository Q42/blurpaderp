# Blurpaderp

Generate random pronouncable ids, between 9 and 15 characters long.

## Installing
```sh
npm install blurpaderp
yarn add blurpaderp
```

## Usage

### Javascript
```javascript
var Blurpaderp = require('blurpaderp');
var blurp = Blurpaderp.generate();
console.log(blurp);
```

### Typescript
```typescript
import Blurpaderp from 'blurpaderp';
console.log(Blurpaderp.generate());
```

## Test
```sh
npm run test
```