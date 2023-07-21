const nInput = document.querySelector('#name');
const eInput = document.querySelector('#email');
const pInput = document.getElementById('phoneno');
const msg = document.getElementById('msg');
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

const form = document.getElementById('my-form');
form.addEventListener('submit', addItem);

function addItem(e) {
    e.preventDefault();
    const name = e.target.userName.value;
    const email = e.target.userEmailId.value;
    const phonenumber = e.target.phoneNumber.value;

    const userDetails = {
        name,
        email,
        phonenumber
    };
    const userDetailsSerialized = JSON.stringify(userDetails);
    // adding data to local storage 
    // localStorage.setItem(email,userDetailsSerialized);

    // adding data to server/cloud/crudcrud using axios 
    axios.post("https://crudcrud.com/api/e5239864fa96446397fe630c54479f36/appointmentDetails", userDetails)
    .then((res) => {
        const parentList = document.getElementById('items');
        const newListItem = document.createElement('li');
        newListItem.appendChild(document.createTextNode('Name: ' + name + ', ' + 'Email: ' + email + ', ' + 'Phone Number: ' + phonenumber))
        parentList.appendChild(newListItem)
    })
    .catch((err) => console.error(err))

    // showing data on screen 
    // const parentList = document.getElementById('items');
    // const newListItem = document.createElement('li');
    // newListItem.appendChild(document.createTextNode('Name: ' + name + ', ' + 'Email: ' + email + ', ' + 'Phone Number: ' + phonenumber))
    
    // delete button 
    // const delbtn = document.createElement('button');
    // delbtn.className = 'delete';
    // delbtn.innerText = 'X'
    // delbtn.onclick = () => {
    //     localStorage.removeItem(email);
    //     parentList.removeChild(newListItem);
    // }

    // edit button 
    // const editbtn = document.createElement('button');
    // editbtn.innerText = 'Edit';
    // editbtn.className = 'edit';
    // editbtn.onclick = () => {
    //     localStorage.removeItem(email);
    //     nInput.value = name;
    //     eInput.value = email;
    //     pInput.value = phonenumber;
    //     parentList.removeChild(newListItem);
    // }

    // newListItem.appendChild(delbtn);
    // newListItem.appendChild(editbtn);
    // parentList.appendChild(newListItem);
}