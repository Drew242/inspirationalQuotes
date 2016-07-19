console.log('quote time');
angular.module('quoteApp', []);

angular.module('quoteApp')
  .controller('quoteCtrl', quoteCtrl);

angular.module('quoteApp')
  .factory('staticQuotes', staticQuotes)

function staticQuotes() {

  var quotes = [
    {
      quote: "Everyone has a plan 'till they get punched in the mouth",
      author: "Mike Tyson"
    },
    {
      quote: "I think you've confused me with someone who builds a dam",
      author: "Beavers"
    },
    {
      quote: "There's no 'I' in 'Denial'",
      author: "People"
    },
    {
      quote: "A lion doesn't concern itself with the opinion of sheep",
      author: "George R.R. Martin"
    },
    {
      quote: "He that lives upon hope will die fasting",
      author: "Ben Franklin"
    }
  ]

  return {
    getQuotes: quotes
  }
}

function quoteCtrl(staticQuotes) {
  var quote = this;
  quote.banner  = "Inspirational Quotes";
  quote.statics = staticQuotes.getQuotes;
}
