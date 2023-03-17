//setTimeout( () => {
//    console.log("hello");
//}, 2000);

/* setInterval( () => {
    console.log("hello saniye");
}, 1000); */  

import fetch from 'node-fetch'
import axios from 'axios'

 
/* fetch('https://jsonplaceholder.typicode.com/users/1')
.then( (data) => data.json())
.then((users) => {
    console.log(users);
    fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then( (data) => data.json())
    .then((post) => console.log(post));
}); */

/* async function getData() {
    const {data : user2} = await axios('https://jsonplaceholder.typicode.com/users/2');
    console.log(user2);
}

getData(); */

//import axios from 'axios'


async function getData( user_id ) {
    const {data : user} = await axios('https://jsonplaceholder.typicode.com/users/' + user_id);
    const {data : posts} = await axios('https://jsonplaceholder.typicode.com/posts?userId=' + user_id);

    const mergedObject = {
        user,
        posts,
      };
    console.log(mergedObject);

}

export default getData; 