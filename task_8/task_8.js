let form = document.getElementById('addForm');
let listItems = document.getElementById('items');
let filter = document.getElementById('filter');


// on submit form event 
form.addEventListener('submit', addItem);

// delete event 
listItems.addEventListener('click', removeItem);

// filter event 
filter.addEventListener('keyup', filterItems);

// add item function 
function addItem(e){
    e.preventDefault();
    // console.log(1);

    // get input value 
    let newItem = document.getElementById('item').value;
    let newItem2 = document.getElementById('item2').value;


    // create new li element to add in list 
    let li = document.createElement('li');
    // add class 
    li.className = 'list-group-item';
    // add textnode to li with input value 
    li.appendChild(document.createTextNode(newItem + ": "));
    li.appendChild(document.createTextNode(newItem2));


    // creating delete button for new li 
    let delButton = document.createElement('button');
    // add class to delButton 
    delButton.className = 'btn btn-danger btn-sm float-right delete';
    // add text to delButton 
    delButton.appendChild(document.createTextNode('X'));

    // creating edit button for new li 
    let editButton = document.createElement('button');
    // add class to editButton 
    editButton.className = 'btn btn-sm float-right';
    // add text to editButton 
    editButton.appendChild(document.createTextNode('Edit'));
    // add style to editButton 
    editButton.style.marginRight = '10px' ;

    // adding delButton to li 
    li.appendChild(delButton);

    // adding editButton to li 
    li.appendChild(editButton);
    
    // adding new li to list 
    listItems.appendChild(li);

}

function removeItem(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm("Are you sure?")) {
            let liToDelete = e.target.parentElement;
            listItems.removeChild(liToDelete);
        }
    }
}

function filterItems(e) {
    // converting input filterText to lowercase  
    let filterText = e.target.value.toLowerCase();
    // console.log(filterText);
    let items = listItems.getElementsByTagName('li');
    // converting items(HTMLCollection) to an Array 
    Array.from(items).forEach(function (item){
        let itemName = item.childNodes;
        
        if (itemName[0].textContent.toLowerCase().indexOf(filterText) != -1) {
            item.style.display = 'block';
        }
        else if (itemName[1].textContent.toLowerCase().indexOf(filterText) != -1) {
            item.style.display = 'block';
        }
        else {
            item.style.display = 'none';
        }
    })
}
