console.log(document);
console.log(document.body);
console.log(document.title);

//selecting elements
const heading = document.querySelector("h1");
const paragraph = document.querySelector("p");
const button = document.querySelector("button");

console.log(heading);
console.log(paragraph);
console.log(button);

console.log(heading.textContent);

//text changing
heading.textContent = "Dom Mastery";
paragraph.textContent = "I'm learning DOM manipulation";

//class changing
heading.classList.add("active");

//changing attribute
button.setAttribute("title", "Click on this button");


console.log(heading.textContent);
console.log(button.getAttribute("title"));
console.log(heading.classList.contains("active"));


//some other changes practice
heading.classList.remove("active");

//Add the class if absent; remove it if present
heading.classList.toggle("active");

//Change inline styles
heading.style.color = "red";
heading.style.fontSize = "40px";


//selecting by id and class
const heading1 = document.getElementById("main-heading");
const paragraph1 = document.querySelector(".description");
const button1 = document.querySelector("#change-button");

console.log(heading1);
console.log(paragraph1);
console.log(button1);


//some other manipulations
const skillItems = document.querySelectorAll("#skills li");
skillItems.forEach((skill) => {
    console.log(skill.textContent);
});

console.log(button.hasAttribute("title"));
const buttonTitle = button.getAttribute("title");
console.log(buttonTitle);
button.setAttribute("disabled", "");
button.removeAttribute("disabled");

//adding a new element
const newElement = document.createElement("li");
newElement.textContent = "react";
const parentSkillsList = document.getElementById("skills");
parentSkillsList.append(newElement);
const skillItems2 = document.querySelectorAll("#skills li")
skillItems2.forEach((skill) => {
    console.log(skill.textContent)
});


const newParagraph = document.getElementById("output");
newParagraph.textContent = "DOM practice completed!";

//deleting element
newElement.remove();



//DOM Traversal
const firstSkill = parentSkillsList.firstElementChild;
console.log(firstSkill);

const lastSkill = parentSkillsList.lastElementChild;
console.log(lastSkill);

const children = parentSkillsList.children;
console.log(children);

const firstSkillText = parentSkillsList.firstElementChild.textContent;
console.log(firstSkillText);

const lastSkillText = parentSkillsList.lastElementChild.textContent;
console.log(lastSkillText);

const nextElement = firstSkill.nextElementSibling.textContent;
console.log(nextElement);

const previousElement = lastSkill.previousElementSibling.textContent;
console.log(previousElement);


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
    } else if(cleanFormName.length < 3){
        alert("Name must be at least 3 characters");
    } else {
        console.log(`welcome ${cleanFormName}`);
    }
});



//managing many items events with one listener
parentSkillsList.addEventListener("click",function (event){
    if (event.target.tagName === "LI" ) {
        console.log(event.target.textContent);
    }
});