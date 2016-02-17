var decypher = require('decypher');

function output(queries) {
  return 'module.exports = ' + JSON.stringify(queries) + ';';
}

module.exports = function(source) {
  this.cacheable(true);

  var queries = decypher.parse(source);

  if (queries.length === 1 && !queries[0].name)
    return output(queries[0].body)

  var index = {};

  queries.forEach(function(query) {
    index[query.name] = query.body;
  });

  return output(index);
};
