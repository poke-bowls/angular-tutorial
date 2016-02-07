(function(){
  "use strict";

  function BookService ( ) {
    this.books = [
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
      return this.books;
    };

    this.getBook = function(id) {
      return this.books.filter(function(book){
        return book.id === id;
      })
      .reduce(function (_, book){
        return book;
      });
    };

    this.addBook = function(book){
      var nextId = this.books.length + 1;
      this.books.push({
        id : nextId,
        title : book.title,
        author : book.author
      });
    };
  }

  angular.module('myApp').service('BookService', BookService);

})();