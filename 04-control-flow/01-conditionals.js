//1. if / else
const age1 = 20;

if (age1 >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}

//2.else if
const score = 75;

if (score >= 90) {
    console.log("A");
} else if (score >= 70) {
    console.log("B");
} else if (score >= 50) {
    console.log("C");
} else {
    console.log("F");
}

//3.Combinations
const age2 = 25;
const hasTicket = true;

if (age2 >= 18 && hasTicket) {
    console.log("You can enter");
}
//or 
if (age2 < 18 || !hasTicket) {
    console.log("Access denied");
}




//4.Ternary Operator
const age3 = 20;

const message = age3 >= 18 ? "Adult" : "Minor";


//5.switch
const role = "admin";

switch (role) {
    case "admin":
        console.log("Admin panel");
        break;

    case "user":
        console.log("User dashboard");
        break;

    case "guest":
        console.log("Guest page");
        break;

    default:
        console.log("Unknown role");
}



//exercise
const age4 = 22;
const hasLicense = true;

if (age4 >= 18 && hasLicense ) {
    console.log("You can drive");
} else {
    console.log("You cannot drive");
}



