function loadData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))
    //console data dekhabe---------------------------
    // ----------------------------------------------
}


function loadUseersData() {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => response.json())
        .then(json => displayUsers(json));
            
    // display akta function jeta display hobe UI te
    // ---------------------------------------------
}

//No need
// function loadPosts() { //100 post
//     fetch('https://jsonplaceholder.typicode.com/posts')
//         .then(res => res.json())
//         .then(data => displayPosts(data))
// // atao dekhabo--------UI te ------------------------
// // --------------------------------------------------

// }


function displayUsers(data) { //10user ar jonno UI te dekhanor function
    const ul = document.getElementById('10Users');
    for (const comment of data) {
        console.log(comment);
        const li = document.createElement('li');
        li.innerText = `Id Non: ${comment.id} name: ${comment.name} email: ${comment.email} `;
        ul.appendChild(li);
    }
}







// No need 
// function displayPosts(data) { //100post ar jonno UI te dekhanor function
//     const ul = document.getElementById('100Posts');
//     for (const post of data) {
//         console.log(post);
//         const li = document.createElement('li');
//         li.innerText = `Post Id: ${post.id} Post Title: ${post.title}`;
//         ul.appendChild(li);
//     }
// }