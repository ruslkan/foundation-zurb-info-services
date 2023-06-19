// Example file src/helpers/br.js
module.exports = function(options) {
  // options.fn(this) = Handelbars content between {{#br}} HERE {{/br}}
  var br = options.fn(this) + '<br />';
  return br;
}