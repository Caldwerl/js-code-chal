
function Book (title) {

  this.title = title;
  this.shelved = false;
  this.shelf = null;

  this.enshelf = function (targetShelf) {

    if(!this.shelved){
      targetShelf.books.push(this);
      this.shelved = true;
      this.shelf = targetShelf;
    }
  };

  this.unshelf = function () {

    var index = 0;

    if(this.shelved){

      while(this.shelf.books[index].title != this.title){
        index++;
      }

      this.shelf.books.splice(index, 1);
      this.shelf = null;
      this.shelved = false;
    }
  };

}



function Shelf () {

  this.books = [];

  this.reportBooks = function () {

    this.books.forEach(function(book) {
      console.log("-" + book.title);
    });
  };
}



function Library () {

  this.shelves = [];

  this.reportInventory = function () {

    for (var i = 0; i < this.shelves.length; i++) {
      console.log("Shelf " + (i+1) + " contains");
      this.shelves[i].reportBooks();
    }
  };
}
