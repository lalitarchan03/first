// const form = document.getElementById('inputform');
// const pName = document.getElementById('pname');
// const pPrice = document.getElementById('price');
// const pCategory = document.getElementById('categ');



// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const tableNumber = pCategory.value;
//     const productName = pName.value;
//     const productprice = pPrice.value;

//     curProductDetails = {
//         productName,
//         productprice,
//         tableNumber
//     }

//     axios.post("https://crudcrud.com/api/1c0a4661f4e543b0b69076e5ac86b35a/orderDetails", curProductDetails)
//         .then((res) => {
//             // console.log(res.data)
//             addUserDetailsOnScreen(res.data)
//         })
//         .catch((err) => {
//             console.error(err)
//         })

//     pName.value = '';
//     pPrice.value = '';

// })

// //###########################################################################################################

// function addUserDetailsOnScreen(curProDetails) {

//     const newListItem = document.createElement('li');
//     newListItem.textContent = `Product Name: ${curProDetails.productName}, Selling Price: ${curProDetails.productprice}`;

//     // const categoriesObject = ['electronic_items', 'food_items', 'fashion_items', 'skincare_items', 'decor_items'];

//     const parentList = document.getElementById(curProDetails.tableNumber);
//     parentList.appendChild(newListItem);

//     // delete button 
//     const delbtn = document.createElement('button');
//     delbtn.className = 'delete';
//     delbtn.innerText = 'X'
//     delbtn.onclick = () => {
       
//         let productIdToDelete = curProDetails._id 
//         axios.delete(`https://crudcrud.com/api/1c0a4661f4e543b0b69076e5ac86b35a/orderDetails/${productIdToDelete}`)
//             .then(res => {
//                 parentList.removeChild(newListItem);
//             })
//             .catch((err) => {
//                 console.error(err);
//             });
        
//     }
//     newListItem.appendChild(delbtn);

//     // edit button 
//     const editbtn = document.createElement('button');
//     editbtn.innerText = 'Edit';
//     editbtn.className = 'edit';
//     editbtn.onclick = () => {

//         pName.value = curProDetails.productName;
//         pPrice.value = curProDetails.productprice;
//         pCategory.value = curProDetails.tableNumber;
        
//         let productIdToUpdate = curProDetails._id 
//         axios.delete(`https://crudcrud.com/api/1c0a4661f4e543b0b69076e5ac86b35a/orderDetails/${productIdToUpdate}`)
//             .then(res => {
//                 parentList.removeChild(newListItem);
//             })
//             .catch((err) => {
//                 console.error(err);
//             });
//     }
//     newListItem.appendChild(editbtn);
// }

// window.addEventListener("DOMContentLoaded", () => {
//     axios.get("https://crudcrud.com/api/1c0a4661f4e543b0b69076e5ac86b35a/orderDetails")
//         .then((res) => {
//             for (let i=0; i < res.data.length; i++) {
//                 addUserDetailsOnScreen(res.data[i])
//             }
//         })
//         .catch((err) => {
//             console.error(err)
//         })
// })

const form = document.getElementById('inputform');
const pName = document.getElementById('pname');
const pPrice = document.getElementById('price');
const pCategory = document.getElementById('categ');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const tableNumber = pCategory.value;
    const productName = pName.value;
    const productPrice = pPrice.value;

    const curProductDetails = {
        productName,
        productPrice,
        tableNumber
    };

    try {
        const response = await axios.post("https://crudcrud.com/api/1c0a4661f4e543b0b69076e5ac86b35a/orderDetails", curProductDetails);
        addUserDetailsOnScreen(response.data);
    } catch (error) {
        console.error(error);
    }

    pName.value = '';
    pPrice.value = '';
});

async function addUserDetailsOnScreen(curProDetails) {
    const newListItem = document.createElement('li');
    newListItem.textContent = `Product Name: ${curProDetails.productName}, Selling Price: ${curProDetails.productPrice}`;

    const parentList = document.getElementById(curProDetails.tableNumber);
    parentList.appendChild(newListItem);

    // delete button
    const delbtn = document.createElement('button');
    delbtn.className = 'delete';
    delbtn.innerText = 'X';
    delbtn.onclick = async () => {
        const productIdToDelete = curProDetails._id;
        try {
            await axios.delete(`https://crudcrud.com/api/1c0a4661f4e543b0b69076e5ac86b35a/orderDetails/${productIdToDelete}`);
            parentList.removeChild(newListItem);
        } catch (error) {
            console.error(error);
        }
    };
    newListItem.appendChild(delbtn);

    // edit button
    const editbtn = document.createElement('button');
    editbtn.innerText = 'Edit';
    editbtn.className = 'edit';
    editbtn.onclick = () => {
        pName.value = curProDetails.productName;
        pPrice.value = curProDetails.productPrice;
        pCategory.value = curProDetails.tableNumber;
        let productIdToUpdate = curProDetails._id 
        axios.delete(`https://crudcrud.com/api/1c0a4661f4e543b0b69076e5ac86b35a/orderDetails/${productIdToUpdate}`)
            .then(res => {
                parentList.removeChild(newListItem);
            })
            .catch((err) => {
                console.error(err);
            });
    };
    newListItem.appendChild(editbtn);
}

window.addEventListener("DOMContentLoaded", async () => {
    try {
        const response = await axios.get("https://crudcrud.com/api/1c0a4661f4e543b0b69076e5ac86b35a/orderDetails");
        for (let i = 0; i < response.data.length; i++) {
            await addUserDetailsOnScreen(response.data[i]);
        }
    } catch (error) {
        console.error(error);
    }
});
