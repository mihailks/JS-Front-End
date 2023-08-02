// function attachEvents() {
//     const POSTS_URL = "http://localhost:3030/jsonstore/blog/posts"
//     const COMMENTS_URL = "http://localhost:3030/jsonstore/blog/comments"
//
//     const loadPostsButton = document.querySelector("#btnLoadPosts")
//     const loadCommentsButton = document.querySelector("#btnViewPost")
//
//     loadPostsButton.addEventListener('click', loadPosts);
//     loadCommentsButton.addEventListener('click', LoadSinglePost);
//    
//     let posts;
//
//     async function loadPosts() {
//         const result = await (await fetch(POSTS_URL)).json();
//        
//         const postDropdown = document.querySelector("#posts");
//         posts = result;
//         Object.values(result).forEach(post => {
//             const option = document.createElement("option");
//             option.value = post.id;
//             option.textContent = post.title;
//             postDropdown.appendChild(option);
//         });
//     }
//
//     async function LoadSinglePost() {
//         document.querySelector("#post-comments").innerHTML = "";
//         const result = await (await fetch(COMMENTS_URL)).json();
//
//         const currentSelectedPost = posts[document.querySelector("#posts").value];
//        
//         const comments = Object
//             .values(result)
//             .filter(comment => comment.postId === currentSelectedPost.id);
//        
//         document.querySelector("#post-title").textContent = currentSelectedPost.title;
//         document.querySelector("#post-body").textContent = currentSelectedPost.body;
//
//         for (const comment of comments) {
//             let li = document.createElement("li");
//             li.textContent = comment.text;
//             document.querySelector("#post-comments").appendChild(li);
//         }
//        
//        
//     }
// }
//
// attachEvents();
//
//
//
//
function attachEvents() {
    const BASE_POSTS_URL = 'http://localhost:3030/jsonstore/blog/posts';
    const BASE_COMMENTS_URL = 'http://localhost:3030/jsonstore/blog/comments/';
    const loadButton = document.getElementById('btnLoadPosts');
    const viewPostButton = document.getElementById('btnViewPost');
    const selectButton = document.getElementById('posts');
    let postBody = {};

    loadButton.addEventListener('click', loadPosts);
    viewPostButton.addEventListener('click', viewPost)


    function loadPosts() {
        fetch(BASE_POSTS_URL)
            .then((response) => response.json())
            .then((data) => {
                selectButton.textContent = '';
                for (const key in data) {
                    const newOption = document.createElement('option');
                    newOption.value = data[key].id;
                    newOption.textContent = data[key].title;
                    selectButton.appendChild(newOption)
                    postBody[data[key].id] = data[key].body
                }
            })
            .catch((error) => {
                console.error(error.message)
            })
    }

    function viewPost() {
        const optionId = selectButton.value;
        const optionsButton = Array.from(selectButton.options);
        let optionText = null;
        for (const option of optionsButton) {
            if (option.value === optionId) {
                optionText = option.textContent;
                break;
            }
        }

        fetch(BASE_COMMENTS_URL)
            .then((response) => response.json())
            .then((data) => {
                const heading = document.getElementById('post-title');
                heading.textContent = optionText;
                const ul = document.getElementById('post-comments');
                const p = document.getElementById('post-body');
                p.textContent = postBody[optionId];

                ul.textContent = ''
                for (const key in data) {
                    if (data[key].postId === optionId) {
                        let li = document.createElement('li');
                        li.textContent = data[key].text;
                        ul.appendChild(li);
                    }
                }
            })
            .catch((error) => {
                console.error(error.message)
            })
    }
}

attachEvents();