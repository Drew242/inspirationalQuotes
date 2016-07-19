console.log('quote time');
angular.module('quoteApp', []);

angular.module('quoteApp')
  .controller('quoteCtrl', quoteCtrl);

function quoteCtrl() {
  var quote = this;
  quote.banner = "Inspirational Quotes";
}
