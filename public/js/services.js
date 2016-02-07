(function(){
  "use strict";

  function BookService ( ) {
    var books = [
      {
        id : 1,
        title : 'Nigel Crying',
        author : 'Chaz Lum'
      },
      {
        id : 2,
        title : 'Ray Laughing',
        author : 'Kento Bento'
      },
      {
        id : 3,
        title : 'Outliers',
        author : 'Malcolm Gladwell'
      }
    ];

  this.getBooks = function() {
    return books;
  };

  this.getBook = function(id) {
    return books.filter(function(book){
      return book.id === id;
    })
    .reduce(function (_, book){
      return book;
    });
  };

  }

  angular.module('myApp').service('BookService', BookService);

})();