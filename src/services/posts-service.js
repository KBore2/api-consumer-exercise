import axios from 'axios'

function getPosts()
{
    const userid = document.querySelector('select').value;

    console.log(userid)

    axios({
        method:'get',
        url:`https://jsonplaceholder.typicode.com/posts?userId=${userid}`,
    })
    .then(response => {
    
    var posts = response.data;

    const postsSection = document.querySelector(".posts")

    let singlepost = `<div class="post">
                            <h4>Title</h2>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                            A nesciunt aliquid odio reiciendis aliquam veritatis maxime sequi dolore voluptate ipsam officia, 
                            explicabo cupiditate earum, quaerat, id sapiente recusandae inventore nulla?
                            </p>
                        </div>`
    for(let i = 0 ; i<6;i++)
    {
        let singlepost = `<div class="post"><h4>${posts[i].title}</h2><p>${posts[i].body}</p></div>`;

        postsSection.innerHTML+= singlepost
    }
    })
}

function deleteLastPost()
{
    const userid = document.querySelector('select').value;

    const postsSection = document.querySelector(".posts")

    axios({
        method:'delete',
        url:`https://jsonplaceholder.typicode.com/posts/${postsSection.childNodes.length-1}`,
        headers:{
                 'Content-type':'application/json'
        }
    })
    .then(response => {
    
        postsSection.removeChild(postsSection.lastChild)
    
    })
}

function addPost(title,body)
{
    const userid = document.querySelector('select').value;

    const postsSection = document.querySelector(".posts")
    
    axios({
        method:'post',
        url:`https://jsonplaceholder.typicode.com/posts`,
        headers:{
                 'Content-type':'application/json'
        },
        data:{
            userId:userid,
            title:title,
            body:body,
            
        }
    })
    .then(response => {
        let singlepost = `<div class="post"><h4>${response.data.title}</h2><p>${response.data.body}</p></div>`;

        postsSection.innerHTML+= singlepost;
    
    })
}

function updatePost(id,title,body)
{
    const userid = document.querySelector('select').value;

    const postsSection = document.querySelector(".posts")
    
    axios({
        method:'put',
        url:`https://jsonplaceholder.typicode.com/posts/${id}`,
        headers:{
                 'Content-type':'application/json'
        },
        data:{
            userId:userid,
            title:title,
            body:body,
            
        }
    })
    .then(response => {
        
        console.log(response.data)
        if(id > 0 && id <= postsSection.childNodes.length)
        {
            let updatedPost = postsSection.childNodes[id-1];

            updatedPost.childNodes[0].innerHTML = response.data.title;
            updatedPost.childNodes[1].innerHTML = response.data.body;
        }
    
    })
}

export {getPosts,deleteLastPost,addPost,updatePost}