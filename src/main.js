import './main.css'
import axios from 'axios'
import getUser from './services/user-service.js'
import {getPosts,deleteLastPost,addPost,updatePost} from './services/posts-service'

console.log("I AM MAIN")

const onLoad = function()
{
    document.onload
    {
        getUser(1);
    }
}

onLoad();

const getPostsButton = document.querySelector('#get-posts');
getPostsButton.addEventListener('click',function()
{
    getPosts();
})

const deleteLastPostButton = document.querySelector('#delete-last-post');
deleteLastPostButton.addEventListener('click',function()
{
    deleteLastPost();
})

const addPostButton = document.querySelector('#add-post');
addPostButton.addEventListener('click',function()
{
    document.querySelector('.add-post-form').style = 'display:block'
})

const updatePostButton = document.querySelector('#update-post')
updatePostButton.addEventListener('click',function()
{
    document.querySelector('.add-post-form').style = 'display:block';
    document.querySelector('#update-post-id-label').style = 'display:inline';
    document.querySelector('#update-post-id-input').style = 'display:inline';
})

const form = document.querySelector('#post-form');
form.addEventListener('submit',event =>{
    event.preventDefault();
    document.querySelector('.add-post-form').style = 'display:none';
    document.querySelector('#update-post-id-label').style = 'display:none';
    document.querySelector('#update-post-id-input').style = 'display:none';
    

    console.log(event.target.id.value === '')
    console.log(event.target.title.value)
    if(event.target.id.value === '')
        addPost(event.target.title.value,event.target.body.value)
    else
        updatePost(event.target.id.value,event.target.title.value,event.target.body.value)

    form.reset();


})

const resetPage = function()
{
    const postsSection = document.querySelector(".posts")

    while(postsSection.hasChildNodes())
        postsSection.removeChild(postsSection.firstChild)

    document.querySelector('.add-post-form').style = 'display:none';
    document.querySelector('#update-post-id-label').style = 'display:none';
    document.querySelector('#update-post-id-input').style = 'display:none';
    form.reset();
}

const selectTag = document.querySelector('select');
selectTag.addEventListener('change',event =>
{
    resetPage()
    getUser(event.target.value)
    
})




