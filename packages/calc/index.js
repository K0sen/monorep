const hello = require('@esports/hello');

hello();
console.log('calc 1');

module.exports = () => {
  hello();
  console.log('calc 2');
}