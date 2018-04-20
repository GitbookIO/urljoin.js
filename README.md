# urljoin.js

An intuitive and robust module for joining URLs. Works nice in `node` and `browserify`.

## Install

```
npm i urljoin.js
```

## Example

```
var urljoin = require('urljoin.js');

urljoin('http://abc.com', 'team', 'about');
// => 'http://abc.com/team/about'
```
