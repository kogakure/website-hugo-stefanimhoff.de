<div id="medienkonsum">
<h3>Bücher</h3>
<?php 
  $books = simplexml_load_file('http://readernaut.com/api/v1/xml/kogakure/books/reading/?order_by=-modified');
  foreach ($books->reader_book as $book) {
      echo('<a class="book" href="'. $book->book_edition->permalink .'"><img src="'. $book->book_edition->covers->cover_large .'" width="150" alt="'. $book->book_edition->title .'" title="'. $book->book_edition->title .'" /></a>');
  }
?>
</div>