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

