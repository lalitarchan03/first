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

function addUserDetailsOnScreen(curUserDetails) {
    const parentList = document.getElementById('items');
    const newListItem = document.createElement('li');
    newListItem.appendChild(document.createTextNode('Name: ' + curUserDetails.name + ', ' + 'Email: ' + curUserDetails.email + ', ' + 'Phone Number: ' + curUserDetails.phonenumber))
    parentList.appendChild(newListItem)

    delete button 
    const delbtn = document.createElement('button');
    delbtn.className = 'delete';
    delbtn.innerText = 'X'
    delbtn.onclick = () => {
        // localStorage.removeItem(email);
        let postIdToDelete = curUserDetails._id 
        axios.delete(`https://crudcrud.com/api/deb47ed1efc6491e804106b4279f3207/appointmentDetails/${postIdToDelete}`)
            .then(res => {
                console.log(`Deleted post with ID ${postIdToDelete}`);
            })
            .catch((err) => {
                console.error(err);
            });
        parentList.removeChild(newListItem);
    }
    newListItem.appendChild(delbtn);
}

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

    // adding data to server/cloud/crudcrud using axios 
    axios.post("https://crudcrud.com/api/deb47ed1efc6491e804106b4279f3207/appointmentDetails", userDetails)
        .then((res) => {
            // console.log(res.data)
            addUserDetailsOnScreen(res.data)
        })
        .catch((err) => {
            console.error(err)
        })

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

window.addEventListener("DOMContentLoaded", () => {
    axios.get("https://crudcrud.com/api/deb47ed1efc6491e804106b4279f3207/appointmentDetails")
        .then((res) => {
            for (let i=0; i < res.data.length; i++) {
                addUserDetailsOnScreen(res.data[i])
            }
        })
        .catch((err) => {
            console.error(err)
        })
})