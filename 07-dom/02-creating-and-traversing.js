//adding a new element
const newElement = document.createElement("li");
newElement.textContent = "react";
const parentSkillsList = document.getElementById("skills");
parentSkillsList.append(newElement);
const skillItems2 = document.querySelectorAll("#skills li");
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


