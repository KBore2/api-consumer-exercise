 import axios from "axios";
 
 export default function getUser(id)
{
    console.log(id)
    axios(
        {
            method:'get',
            url:`https://jsonplaceholder.typicode.com/users/${id}`
        }
    ).then((resposne) =>
    {
        const user = resposne.data;
        const Username = document.querySelector('h3');
        const list  = document.querySelector(".user ul");

        const Name = list.children[0];
        const Phone = list.children[1]; 
        const Email = list.children[2];


        Username.innerHTML = `Username: ${user.username}`
        Name.innerHTML = `Name: ${user.name}`;
        Phone.innerHTML = `Phone: ${user.phone}`;
        Email.innerHTML = `Email: ${user.email}`;
    })
}

