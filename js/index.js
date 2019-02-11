$(document).ready( function() { // this method is used to make a function available after the document is loaded. What ever code you write inside will run once the page DOM is ready to exec
     $( "button" ).click(function() {
          var toDoInfo = $( "#AddToDo" ).val();

          if ( toDoInfo === '' ) {
               alert( 'You have to type something in the text field bro!');
          } else {
               var $toDo = $('<li> `${toDoInfo}`</li>');
               $toDo.text( toDoInfo );
               $toDo.appendTo('#generalContent')
          }
     });
});

// $(#generalButton).click( function() {
//           var toDoInfo = $('#AddToDo').val();
//           var $toDo = $('<toDo></toDo>');
//           $toDo.text( toDoInfo );
//           $toDo.appendTo($content);
//      })