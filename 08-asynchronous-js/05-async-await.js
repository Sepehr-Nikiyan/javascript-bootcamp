//Start of async/await
async function getNumber() {
    return 10;
}
getNumber().then((res) => console.log(res));

//2nd practice
async function getNumberWithAwait() {
    const myPromise = Promise.resolve(20);
    const result = await myPromise;
    return result
}
getNumberWithAwait().then((res) => console.log(res));



//error handling in async/await
async function getUser() {
    try {
        const error = Promise.reject(new Error("User not found"));
        const result = await error;
        return result;
    } catch (error) {
        console.log(error.message);
    }
}
getUser();



//other practice of promise/async/await
async function getPrice() {
    try {
        const response = Promise.resolve(100);
        const result = await response + 20;
        console.log(result);
        return result;
    } catch (error) {
        console.log(error.message)
    }
}
getPrice();


//fetching API
async function getPost() {
    try {
        const request = fetch("https://jsonplaceholder.typicode.com/posts/1");
        const response = await request;
        const data = await response.json();
        console.log(data);
        return data
    } catch (error) {
        console.log(error.message)
    }
}
getPost();

//response.ok practice
async function getPost2() {
    try {
        const request = fetch("https://jsonplaceholder.typicode.com/posts4444/1");
        const response = await request;
        if (!response.ok) {
            throw new Error("Failed to fetch post");
        }
        const data = await response.json();
        console.log(data);
        return data
    } catch (error) {
        console.log(error.message)
    }
}
getPost2()


//working with API data
async function getPostTitles() {
    try {
        const request = fetch("https://jsonplaceholder.typicode.com/posts");
        const res = await request;
        if (!res.ok) {
            throw new Error("Failed to fetch post titles.");
        }
        const data = await res.json();
        const dataTitles = data.map((data) => { return data.title });
        console.log(dataTitles);
        return dataTitles
    } catch (error) {
        console.log(error.message)
    }
}
getPostTitles();


//another practice of APIs
async function getPublishedPosts() {
    try {
        const request = fetch("https://jsonplaceholder.typicode.com/posts");
        const response = await request;
        if (!response.ok) {
            throw new Error("Failed in fetching published posts.");
        }
        const data = await response.json();
        const filteredData = data.filter((post) => post.userId === 1);
        console.log(filteredData);
        return filteredData
    } catch (error) {
        console.log(error.message)
    }
}
getPublishedPosts();


//Promise.all() practice
async function getPostsAndUsers() {
    try {
        const requests = Promise.all([
            fetch("https://jsonplaceholder.typicode.com/posts"),
            fetch("https://jsonplaceholder.typicode.com/users")
        ]);
        const responses = await requests;
        for (let i = 0; i < responses.length; i++) {
            if (!responses[i].ok) {
                throw new Error("Error in fetching.");
            }
        }
        const data = await Promise.all(
            responses.map((response) => response.json())
        );
        console.log(data);
        console.log("Posts:", data[0].length);
        console.log("Users:", data[1].length);
        return data;
    } catch (error) {
        console.log(error.message)
    }
}
getPostsAndUsers();


//new practice
async function getUserWithPosts() {
    try {
        const requests = Promise.all([
            fetch("https://jsonplaceholder.typicode.com/users/1"),
            fetch("https://jsonplaceholder.typicode.com/posts?userId=1")
        ]);
        const responses = await requests;
        for (let i = 0; i < responses.length; i++) {
            if (!responses[i].ok) {
                throw new Error("failed");
            }
        }
        const data = await Promise.all(responses.map((response) => response.json()));
        const userData = {
            user: data[0],
            posts: data[1]
        };
        console.log(userData);
        return userData
    } catch (error) {
        console.log(error.message)
    }
}
getUserWithPosts();


//Promise.allSettled() practice
async function checkMultipleApis() {
    try {
        const api = [
            fetch("https://jsonplaceholder.typicode.com/posts"),
            fetch("https://jsonplaceholder.typicode.com/users"),
            fetch("https://jsonplaceholder.typicode.com/invalid-endpoint"),
        ];
        const requests = Promise.allSettled(api);
        const responses = await requests;

        for (let i = 0; i < responses.length; i++) {
            if (responses[i].status === "rejected") {
                const resError = responses[i].reason;
                console.log(resError);
            } else if (responses[i].status === "fulfilled") {
                const resSuccess = responses[i].value;
                if (resSuccess.ok === false) {
                    console.log(resSuccess.status);
                } else {
                    console.log("request was successful.")
                }
            }
        }

        const results = [];

        for (let i = 0; i < responses.length; i++) {
            if (responses[i].status === "fulfilled") {
                const result = responses[i].value;
                if (!result.ok) {
                    continue
                } else {
                    const json = await result.json();
                    results.push(json);
                }
            }

        }
        console.log(results);
        return results;
    } catch (error) {
        console.log(error.message)
    }
}

checkMultipleApis();