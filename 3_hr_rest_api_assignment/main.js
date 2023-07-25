const form = document.getElementById('inputform');
const pName = document.getElementById('pname');
const pPrice = document.getElementById('price');
const pCategory = document.getElementById('categ');



form.addEventListener('submit', (e) => {
    e.preventDefault();
    const tableNumber = pCategory.value;
    const productName = pName.value;
    const productprice = pPrice.value;

    curProductDetails = {
        productName,
        productprice,
        tableNumber
    }

    axios.post("https://crudcrud.com/api/611e89b16d6345b5a12f7f9e3e792cb8/productDetails", curProductDetails)
        .then((res) => {
            // console.log(res.data)
            addUserDetailsOnScreen(res.data)
        })
        .catch((err) => {
            console.error(err)
        })

    pName.value = '';
    pPrice.value = '';

})

//###########################################################################################################

function addUserDetailsOnScreen(curProDetails) {

    const newListItem = document.createElement('li');
    newListItem.textContent = `Product Name: ${curProDetails.productName}, Selling Price: ${curProDetails.productprice}`;

    // const categoriesObject = ['electronic_items', 'food_items', 'fashion_items', 'skincare_items', 'decor_items'];

    const parentList = document.getElementById(curProDetails.tableNumber);
    parentList.appendChild(newListItem);

    // delete button 
    const delbtn = document.createElement('button');
    delbtn.className = 'delete';
    delbtn.innerText = 'X'
    delbtn.onclick = () => {
       
        let productIdToDelete = curProDetails._id 
        axios.delete(`https://crudcrud.com/api/611e89b16d6345b5a12f7f9e3e792cb8/productDetails/${productIdToDelete}`)
            .then(res => {
                parentList.removeChild(newListItem);
            })
            .catch((err) => {
                console.error(err);
            });
        
    }
    newListItem.appendChild(delbtn);

    // edit button 
    const editbtn = document.createElement('button');
    editbtn.innerText = 'Edit';
    editbtn.className = 'edit';
    editbtn.onclick = () => {

        pName.value = curProDetails.productName;
        pPrice.value = curProDetails.productprice;
        pCategory.value = curProDetails.tableNumber;
        
        let productIdToUpdate = curProDetails._id 
        axios.delete(`https://crudcrud.com/api/611e89b16d6345b5a12f7f9e3e792cb8/productDetails/${productIdToUpdate}`)
            .then(res => {
                parentList.removeChild(newListItem);
            })
            .catch((err) => {
                console.error(err);
            });
    }
    newListItem.appendChild(editbtn);
}

window.addEventListener("DOMContentLoaded", () => {
    axios.get("https://crudcrud.com/api/611e89b16d6345b5a12f7f9e3e792cb8/productDetails")
        .then((res) => {
            for (let i=0; i < res.data.length; i++) {
                addUserDetailsOnScreen(res.data[i])
            }
        })
        .catch((err) => {
            console.error(err)
        })
})