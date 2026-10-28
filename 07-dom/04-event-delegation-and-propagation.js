//managing many items events with one listener
// parentSkillsList.addEventListener("click",function (event){
//     if (event.target.tagName === "LI" ) {
//         console.log(event.target.textContent);
//     }
// });

//removing listener
function handleSkillClick(event) {
    if (event.target.tagName === "LI") {
        console.log(event.target.textContent);
    }
};

let isListenerActive = true;
parentSkillsList.addEventListener("click", handleSkillClick);

button1.addEventListener("click", function () {
    if (isListenerActive === true) {
        parentSkillsList.removeEventListener("click", handleSkillClick);
        isListenerActive = false;
    } else {
        parentSkillsList.addEventListener("click", handleSkillClick);
        isListenerActive = true;
    }
});


//Event Propagation(from child to parent)
parentSkillsList.addEventListener("click", function () {
    console.log("List Clicked.");
});

skillItems2.forEach(function (skill) {
    skill.addEventListener("click", function (event) {
        if (event.target.tagName === "LI") {
            event.stopPropagation();
            console.log("Item Clicked.")
        }

    });
});


//once on listener
button1.addEventListener("click",function () {
    console.log("This runs only once");
},{ once: true });