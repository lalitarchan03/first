let userLastActivityTime = null;
let posts = ['shubham','nitin'];



function updateLastUserActivityTime() {
    return new Promise((resolve) => {
      setTimeout(() => {
        userLastActivityTime = new Date();
        resolve();
      }, 1000);
    });
  }

function createPost(post) {
    return new Promise((resolve) => {
      setTimeout(() => {
        posts.push(post);
        resolve(post);
      }, 1000);
    });
}

function deleteLastPost() {
    return new Promise((resolve) => {
      setTimeout(() => {
        posts.pop();
        resolve();
      }, 1000);
    });
}


// try{

//     Promise.all([createPost('New post'), updateLastUserActivityTime()]).then(() => {
//         console.log('Posts:', posts);
//         console.log('Last Activity Time:', userLastActivityTime);
//     }).then(() => {
//             deleteLastPost()
//         })
// }
Promise.all([createPost('New post'), updateLastUserActivityTime()])
  .then(() => {
    console.log('Posts:', posts);
    console.log('Last Activity Time:', userLastActivityTime);
    return deleteLastPost();
  })
  .then(() => {
    console.log('New Posts:', posts);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
