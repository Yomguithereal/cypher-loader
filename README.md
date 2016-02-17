# cypher-loader

A simple [webpack](https://webpack.github.io/) loader for [Cypher](http://neo4j.com/docs/stable/cypher-introduction.html) query files.

## Installation

```bash
npm install --save-dev cypher-loader
```

## Usage

### Configuration

```js
module.exports = {
  module: {
    loaders: [
      {
        test: /\.cypher$/,
        loader: 'cypher'
      }
    ]
  }
};
```

### Require

```js
var queries = require('cypher!./queries.cypher');
```

## Query files

For more information about the query files themselves, you should check the [decypher](https://github.com/Yomguithereal/decypher#query-loader) library's documentation on the subject.

## License

[MIT](LICENSE.txt)
