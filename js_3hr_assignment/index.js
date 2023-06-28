function generateUniqueId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
  }


const aInput = document.getElementById('amount');
const dInput = document.getElementById('disc');
const cInput = document.getElementById('categ');
const msg = document.getElementById('msg');
const btn = document.querySelector('.btn');
const uuid = ('uuid');

const form = document.getElementById('my-form');
form.addEventListener('submit', addItem);

function addItem(e) {
    e.preventDefault();
    const amount = e.target.amount.value;
    const discription = e.target.disc.value;
    const category = e.target.categ.value;
    const uniqueId = generateUniqueId();

    const userDetails = {
        amount,
        discription,
        category,
        uniqueId
    };
    const userDetailsSerialized = JSON.stringify(userDetails);
    // adding data to local storage 
    localStorage.setItem(uniqueId,userDetailsSerialized);

    // showing data on screen 
    const parentList = document.getElementById('items');
    const newListItem = document.createElement('li');
    newListItem.appendChild(document.createTextNode('Amount: ' + amount + ', ' + 'Discription ' + discription + ', ' + 'Category: ' + category + ', ' + 'ID: ' + uniqueId))
    
    // delete button 
    const delbtn = document.createElement('button');
    delbtn.className = 'delete';
    delbtn.innerText = 'X'
    delbtn.onclick = () => {
        localStorage.removeItem(uniqueId);
        parentList.removeChild(newListItem);
    }

    // edit button 
    const editbtn = document.createElement('button');
    editbtn.innerText = 'Edit';
    editbtn.className = 'edit';
    // editbtn.onclick = () => {
    //     editItem(uniqueId);
    //     parentList.removeChild(newListItem);
    //   };
    editbtn.onclick = () => {
        const itemData = localStorage.getItem(uniqueId);
        if (itemData) {
            const { amount, discription, category } = JSON.parse(itemData);
            localStorage.removeItem(uniqueId);
            aInput.value = amount;
            dInput.value = discription;
            cInput.value = category;
            // uniqueId = uniqueId;
            parentList.removeChild(newListItem);
        }
    }

    newListItem.appendChild(delbtn);
    newListItem.appendChild(editbtn);
    parentList.appendChild(newListItem);
}