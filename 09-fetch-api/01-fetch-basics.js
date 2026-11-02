//Getting data from api with fetch
const getData = fetch("https://jsonplaceholder.typicode.com/users/1");
getData
    .then((response) => {
        if (response.ok === false) {
            throw new Error("Fail")
        } else {
            console.log("Successful")
        };
        console.log(response.status);
        return response.json()
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => console.log(error.message));



//sending data wth POST
const myObj = {
    userId: 10,
    title: "my Object",
    body: "this is my first POST"
};

const request = fetch("https://jsonplaceholder.typicode.com/posts",
    {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(myObj)
    });
request
    .then((res) => {
        if (!res.ok) {
            throw new Error("Failed")
        };
        return res.json();
    })
    .then((data) => {
        console.log(data)
    })
    .catch((error) => console.log(error.message));


//using PUT
const putObj = {
    userId: 20,
    title: "my second OBJECT",
    body: "practicing PUT method with api"
};
const request2 = fetch("https://jsonplaceholder.typicode.com/posts/1",
    {
        method: "PUT",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(putObj)
    });

request2.then((res)=>{
    if (!res.ok) {
        throw new Error("Failed");
    }
    return res.json();
})
.then((data)=> console.log(data))
.catch((error)=> console.log(error.message));

//Using PATCH
const myPatchObj = {
    title: "This is my PATCH Object"
};

const request3 = fetch("https://jsonplaceholder.typicode.com/posts/1",
    {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(myPatchObj)
    }
);
request3.then((res)=>{
    if (!res.ok) {
        throw new Error("Failed");
    }
    return res.json();
}).then((data)=>console.log(data)).catch((error)=>console.log(error.message));


//Using DELETE
const request4 = fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "DELETE",
});

request4
    .then((res) => {
        if (!res.ok) {
            throw new Error(`HTTP Error: ${res.status}`);
        }

        console.log("Post deleted successfully!");
        console.log("Status:", res.status);
    })
    .catch((error) => console.log(error.message));





//Query Parameters
const parameters = new URLSearchParams({
    userId : 2,
    id: 15
});


const request5 = fetch(`https://jsonplaceholder.typicode.com/posts?${parameters.toString()}`,
    {
        method: "GET",
        headers: {
            "Accept": "application/json"
        },
    }
);
request5.then((res)=>{
    if (!res.ok) {
        throw new Error("Failed")
    }
    console.log("Post fetched")
    return res.json();
}).then((data)=>console.log(data)).catch((error)=> console.log(error.message));