const hello = require('@esports/hello');

hello();
console.log('calc');

module.exports = () => {
  hello();
  console.log('calc');
}