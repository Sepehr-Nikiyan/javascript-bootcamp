//Event Listener
button1.addEventListener("click", function () {
    heading1.textContent = "I learned DOM Events!";
});

button1.addEventListener("click", function (event) {
    console.log(event);
    console.log(event.target);
    console.log(event.currentTarget);
    console.log(event.type);
});




//Event Bubbling
const eventContainer = document.querySelector(".event-container");
eventContainer.addEventListener("click", function (event) {
    console.log(event.target);
    console.log(event.currentTarget);
});


//input events
const input = document.getElementById("username");
const preview = document.getElementById("preview");
input.addEventListener("input", function () {
    preview.textContent = input.value;
});



//submit events and cleaning and validation
const myForm = document.getElementById("signup-form");
const formName = document.getElementById("name");
myForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const cleanFormName = formName.value.trim();
    if (cleanFormName === "") {
        alert("Name is required");
    } else if (cleanFormName.length < 3) {
        alert("Name must be at least 3 characters");
    } else {
        console.log(`welcome ${cleanFormName}`);
    }
});



