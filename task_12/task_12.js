const form = document.querySelector('#my-form');
const nInput = document.querySelector('#name');
const eInput = document.querySelector('#email');
const pInput = document.getElementById('phoneno');
const msg = document.querySelector('.msg');
const btn = document.querySelector('.btn');


btn.addEventListener('mouseover', (e) => {
    e.preventDefault();
    if(nInput.value === '' || eInput.value === '' || !pInput.value) {
        btn.style.color = 'blue';
        msg.style.color = 'red';
        msg.innerHTML = 'Please fill all the fields!';
        setTimeout(() => msg.innerHTML = '', 3000);
        setTimeout(() => btn.style.color = 'black', 3000);
    }
})


// on submit form event 
form.addEventListener('submit', addItem);
let listItems = document.getElementById('items');

// add item function 
function addItem(e){
    e.preventDefault();
    // console.log(1);
    if(nInput.value === '' || eInput.value === '' || !pInput.value) {
        alert('Please fill all the fields!');
    }
    else {
        let userDetails = {
            name : nInput.value,
            email : eInput.value,
            phone_number : pInput.value
        };

        let userDetailsSerialized = JSON.stringify(userDetails);

        localStorage.setItem( userDetails.email , userDetailsSerialized);

        
        // create new li element to add in list 
        let li = document.createElement('li');
        // add class 
        li.className = 'list-group-item';
        // add textnode to li with input value 
        li.appendChild(document.createTextNode("Name: " + nInput.value +  ','));
        li.appendChild(document.createTextNode("\tEmail: " + eInput.value + ','));
        li.appendChild(document.createTextNode("\tPhone Number: " + pInput.value));

        // creating delete button for new li 
        let delButton = document.createElement('button');
        // add class to delButton 
        delButton.className = 'delete';
        // add text to delButton 
        delButton.appendChild(document.createTextNode('X'));

        // adding delButton to li 
        li.appendChild(delButton);

        
        // adding new li to list 
        listItems.appendChild(li);
    }

}

listItems.addEventListener('click', removeItem);
function removeItem(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm("Are you sure?")) {
            let liToDelete = e.target.parentElement;
            listItems.removeChild(liToDelete);
        }
    }
}