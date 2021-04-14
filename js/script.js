// Descrizione
// Rifare la todo list come vista insieme a lezione:
// 1. popolando gli elementi della lista con JavaScript
// 2. inserendo un nuovo todo con un input testuale e gli eventi da tastiera
// 3. Rimozione todo con click su icona
// 4. Cliccando sul testo compare uno sbarramento a indicarne il completamento

$(document).ready(function() {

    // Dati esterni(fake)
    var listItems = [
        {
            toDoItem: 'Fare la spesa',
            done: false,
        },
        {
            toDoItem: 'Portare fuori il cane',
            done: false,
        },
        {
            toDoItem: 'Fare l\'esercitazione pomeridiana',
            done: true,
        },
        {
            toDoItem: 'Fare lezione',
            done: false,
        },
        {
            toDoItem: 'Pagare la rata boolean',
            done: true,
        },
    ];


    // References
    var addToList = $('.add-to-list');
    var list = $('.toDo-list');
    var template = $('#template li');
    
    
    // 1. Fill the list
    for (var i = 0; i < listItems.length; i++) {
        
        // Cloning template
        myClone = template.clone();
        myClone.find('.text').text(listItems[i].toDoItem);
        
        if (listItems[i].done) {
            myClone.find('.text').addClass('line-through');
        }

        // Adding to list
        list.append(myClone);
    }
    
    
    // 2. Add a new item to the list
    addToList.keyup(function(e){
        
        // if the user press enter
        if (e.which == 13){
            var addValue = addToList.val().trim();
            
            // if the input is valid
            if (addValue != '') {
                myClone = template.clone();
                myClone.find('.text').text(addValue);
                
                // Adding to list the new item
                list.append(myClone);
                
                // Reset
                addToList.val('');
            }
        }
        
    });
    
    
    // 3. Remove list item on icon click
    $('body').on('click', '.toDo-list li i:last-child', function(){
        $(this).parent().parent('li').remove();
    });


    // 4. Line-through the done task on click
    $('body').on('click', '.toDo-list li .text', function(){
        $(this).toggleClass('line-through');
    });

    $('body').on('click', '.toDo-list li i:first-child', function(){
        $(this).parent().prev('.text').toggleClass('line-through');
    });




// End doc.ready    
});