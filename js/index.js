// step ...
var removeSVG = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50px" height="50px"><path class="fill" style="line-height:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000;text-transform:none;block-progression:tb;isolation:auto;mix-blend-mode:normal" d="M 21 2 C 19.354545 2 18 3.3545455 18 5 L 18 7 L 10.154297 7 A 1.0001 1.0001 0 0 0 9.984375 6.9863281 A 1.0001 1.0001 0 0 0 9.8398438 7 L 8 7 A 1.0001 1.0001 0 1 0 8 9 L 9 9 L 9 45 C 9 46.645455 10.354545 48 12 48 L 38 48 C 39.645455 48 41 46.645455 41 45 L 41 9 L 42 9 A 1.0001 1.0001 0 1 0 42 7 L 40.167969 7 A 1.0001 1.0001 0 0 0 39.841797 7 L 32 7 L 32 5 C 32 3.3545455 30.645455 2 29 2 L 21 2 z M 21 4 L 29 4 C 29.554545 4 30 4.4454545 30 5 L 30 7 L 20 7 L 20 5 C 20 4.4454545 20.445455 4 21 4 z M 11 9 L 18.832031 9 A 1.0001 1.0001 0 0 0 19.158203 9 L 30.832031 9 A 1.0001 1.0001 0 0 0 31.158203 9 L 39 9 L 39 45 C 39 45.554545 38.554545 46 38 46 L 12 46 C 11.445455 46 11 45.554545 11 45 L 11 9 z M 18.984375 13.986328 A 1.0001 1.0001 0 0 0 18 15 L 18 40 A 1.0001 1.0001 0 1 0 20 40 L 20 15 A 1.0001 1.0001 0 0 0 18.984375 13.986328 z M 24.984375 13.986328 A 1.0001 1.0001 0 0 0 24 15 L 24 40 A 1.0001 1.0001 0 1 0 26 40 L 26 15 A 1.0001 1.0001 0 0 0 24.984375 13.986328 z M 30.984375 13.986328 A 1.0001 1.0001 0 0 0 30 15 L 30 40 A 1.0001 1.0001 0 1 0 32 40 L 32 15 A 1.0001 1.0001 0 0 0 30.984375 13.986328 z" font-weight="400" font-family="sans-serif" white-space="normal" overflow="visible"/></svg>';
var completeSVG = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50px" height="50px"><path class="fill" style="line-height:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000;text-transform:none;block-progression:tb;isolation:auto;mix-blend-mode:normal" d="M 25 3 C 12.86158 3 3 12.86158 3 25 C 3 37.13842 12.86158 47 25 47 C 37.13842 47 47 37.13842 47 25 C 47 12.86158 37.13842 3 25 3 z M 25 5 C 36.05754 5 45 13.94246 45 25 C 45 36.05754 36.05754 45 25 45 C 13.94246 45 5 36.05754 5 25 C 5 13.94246 13.94246 5 25 5 z M 34.988281 14.988281 A 1.0001 1.0001 0 0 0 34.171875 15.439453 L 23.970703 30.476562 L 16.679688 23.710938 A 1.0001 1.0001 0 1 0 15.320312 25.177734 L 24.316406 33.525391 L 35.828125 16.560547 A 1.0001 1.0001 0 0 0 34.988281 14.988281 z" font-weight="400" font-family="sans-serif" white-space="normal" overflow="visible"/></svg>';

// step 8.
document.getElementById('add').addEventListener('click', toDoButtonClicked);

// add value to do list
function toDoButtonClicked() {
    var value = document.getElementById('item').value;

    if ( value ) {
          addItemTodo( value );
    } 
}
// step ...
function addItemTodo( text ) {
     // you are recreating the commented out code in the html because that's what you want to happen every time the user clicks the button
     var list = document.getElementById('todo');
     var item = document.createElement('li');
     item.innerText = text;

     var buttons = document.createElement('div');
     buttons.classList.add('removeCompleteButtons');

     var remove = document.createElement('button');
     remove.classList.add('remove');
     remove.innerHTML = removeSVG;
     
     var complete = document.createElement('button');
     complete.classList.add('complete');
     complete.innerHTML = completeSVG

     buttons.appendChild(remove);
     buttons.appendChild(complete);
     item.appendChild(buttons);

     list.appendChild(item);
}

// over innerHTML
// 
// 

// $(document).ready( function() { // this method is used to make a function available after the document is loaded. What ever code you write inside will run once the page DOM is ready to exec
//      $( "button" ).click(function() {
//           var toDoInfo = $( "#AddToDo" ).val();

//           if ( toDoInfo === '' ) {
//                alert( 'You have to type something in the text field bro!');
//           } else {
//                var $toDo = $('<li> `${toDoInfo}`</li>');
//                $toDo.text( toDoInfo );
//                $toDo.appendTo('#generalContent')
//           }
//      });
// });

// $(#generalButton).click( function() {
//           var toDoInfo = $('#AddToDo').val();
//           var $toDo = $('<toDo></toDo>');
//           $toDo.text( toDoInfo );
//           $toDo.appendTo($content);
//      })