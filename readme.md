# active-onions [![Build Status](https://travis-ci.org/k4m4/active-onions.svg?branch=master)](https://travis-ci.org/k4m4/active-onions)

> Filter out inactive onion URLs from an array.


## Install

```
~ ❯❯❯ npm install active-onions
```


## Usage

```js
const activeOnions = require('active-onions');

activeOnions(['https://abcdefghijklmnop.onion/', 'http://xmh57jrzrnw6insl.onion/', 'https://facebookcorewwwi.onion/'])
//=> ['http://xmh57jrzrnw6insl.onion/', 'https://facebookcorewwwi.onion/']
```

**Note**: *Ensure that a `Tor` client is running in the background*. You can do so by running `apt install tor` on Linux and `brew install tor && tor` on macOS.


## API

### activeOnions([array])

Filters out inactive onion URLs from an array.


## License

MIT © [Nikolaos Kamarinakis](https://nikolaskama.me)
