function loadPhosts() {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => response.json())
        .then(json => console.log(json))
    //console data dekhabe---------------------------
    // ----------------------------------------------
}


function photosInDisplay() {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => response.json())
        .then(json => displayUsers(json));
            
            // console.log(json))


    // 
    // display akta function jeta display hobe UI te
    // ---------------------------------------------
}

function displayUsers(data) { //10user ar jonno UI te dekhanor function
    const ul = document.getElementById('10Users');
    for (const photo of data) {
        console.log(photo);
        const li = document.createElement('li');
        li.innerText = `Id Non: ${photo.id} Url: ${photo.url} `;
        ul.appendChild(li);
    }
}


// loadAlbums();
// function displayAlbums(albums) {
//     console.log(albums)
//     const albumContainer = document.getElementById('albums');
//     for (const album of albums) {
//         const p = document.createElement('p');
//         p.style.textAlign = 'center';
//         p.innerText = album.title;
//         albumContainer.appendChild(p);
//     }
// }


























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