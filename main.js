angular.module('quoteApp', ['ngRoute']);

// Routes //

angular.module('quoteApp').config(function($routeProvider) {
    $routeProvider.when( '/', {
      templateUrl: 'main.html'
    });
    $routeProvider.when( '/addQuote', {
      templateUrl: 'addQuote.html'
    })
    $routeProvider.when( '/searchQuotes', {
      templateUrl: 'searchQuotes.html'
    })

    // default route //
    $routeProvider
      .otherwise({
        redirectTo: '/'
      });
});

// Factory for static quotes //

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
    getQuotes: quotes,
    createQuote: function createQuote(quote, author) {
      this.quote = quote;
      this.author = author;
    }
  }

}

// Static Quotes Controller //

angular.module('quoteApp')
  .controller('quoteCtrl', ['$location', 'staticQuotes', quoteCtrl]);

function quoteCtrl($location, staticQuotes) {
  var quote = this;
  quote.banner  = "Inspirational Quotes";
  quote.statics = staticQuotes.getQuotes;
  quote.quote   = '';
  quote.author  = '';

  quote.addQuote = function(quote, author) {
    var newQuote = new staticQuotes.createQuote(quote, author);
    staticQuotes.getQuotes.push(newQuote);
    $location.url('/');
  }

  quote.deleteQuote = function(i) {
    quote.statics.splice(i, 1);
  }
}
