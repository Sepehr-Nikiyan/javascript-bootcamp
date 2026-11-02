//showing api's data with DOM
const postContainer = document.getElementById("posts-container");
const errorContainer = document.getElementById("error-container");

postContainer.innerText= "Loading...";
const user1Params = new URLSearchParams({
    userId: 1
});
const request = fetch(`https://jsonplaceholder.typicode.com/posts?${user1Params.toString()}`,
    {
        method: "GET",
        headers: {
            "Accept": "application/json"
        }
    }
);

request
.then((res)=>{
    if(!res.ok){
        throw new Error("Failed");
    }
    return res.json()
})
.then((datas)=>{
    postContainer.innerHTML = "";
    if (datas.length === 0) {
        postContainer.innerHTML = "No post found"
        return
    }
    datas.forEach((data)=>{ 
    const cart = document.createElement("div");
    cart.style.border = "1px solid black";
    cart.innerHTML = `<h1>${data.title}</h1>
    <br>
    <p>${data.body}</p>`;
    postContainer.appendChild(cart);
})
})
.catch((error)=>{
    errorContainer.innerHTML = `<p style="color:red">${error.message}</p>`
});