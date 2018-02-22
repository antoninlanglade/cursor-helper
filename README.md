<p align="center"><img width="180" src="example/apple-touch-icon.png"></p>
<h1 align="center">cursor-helper</h1>
<h3 align="center">Cursor utility implementing all the different behaviors with priority between components</h3>
<br><br><br>

## Example
Example on [antoninlanglade.github.io/cursor-helper/](https://antoninlanglade.github.io/cursor-helper/)

<br><br>

## Features & Requirements
- Add multiple cursor behavior on different indexes
- All availables cursors https://github.com/wagerfield/cursor

<br><br>

## Module Installation & Usage

##### Installation from npm
```sh
# using npm
$ npm install --save cursor-helper

# or using yarn
$ yarn add cursor-helper
```

##### Usage with npm and a module bundler
```js
import CursorHelper from 'cursor-helper' // ES6 module import
const CursorHelper = require('cursor-helper') // CommonJS module import

// Declaring a new cursor behavior test at index 10
const key = 'cursor-example'
CursorHelper.add(key, 10)
// Set cursor for this cursor
CursorHelper.setCursor(key, 'grab')
// Remove cursor
CursorHelper.remove(key)

```

<br><br>

## Development commands

- `npm install` - Install all npm dependencies
- `npm run start` - Start the dev server with livereload on the example folder
- `npm run build` - Bundle your library in CJS / UMD / ESM
- `npm run deploy` - Deploy your example folder on a gh-page branch
- `npm run test` - Lint your js inside the src folder

<br><br>

## License
MIT.