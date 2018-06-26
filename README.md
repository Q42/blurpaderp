# Blurpaderp

Generate random pronouncable ids, between 9 and 15 characters long.

To see it working, start clicking on [this demo page](demo).

The generated typescript docs are available at [/docs](docs).

## Installing
```sh
npm install blurpaderp
```

or

```sh
yarn add blurpaderp
```

## Usage

```javascript
import { Blurpaderp } from 'blurpaderp';
console.log(Blurpaderp.generate());
```

or 

```javascript
var { Blurpaderp } = require('blurpaderp');
console.log(Blurpaderp.generate());
```

## Test
```sh
npm run test
```