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
        },
        {
            toDoItem: 'Portare fuori il cane',
        },
        {
            toDoItem: 'Fare l\'esercitazione pomeridiana',
        },
        {
            toDoItem: 'Fare lezione',
        },
        {
            toDoItem: 'Pagare la rata boolean',
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
    $('body').on('click', '.toDo-list li i', function(){
        $(this).parent().remove();
    });




// End doc.ready    
});