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



//6.for Loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}


for (let i = 0; i <= 10 ; i++){
    console.log(i);
}


//.7break & continue
for (let i = 0; i <= 10 ; i++){
    if (i == 8) {
        break
    }
    console.log(i);
}


for (let i = 0; i <= 10 ; i++){
    if (i == 3) {
        continue
    }
    console.log(i);
}

//exercise
for (let i = 0; i < 20; i++) {
    if (i == 10) {
        break
    }

    console.log(i);
}

//8.while

let i = 0;

while (i < 5) {
    console.log(i);
    i++;
}

//9.do...while
let i2 = 10;

do {
    console.log(i);
    i++;
} while (i < 5);

//exercise
for (let i = 0; i <= 20 ; i++) {
    if(i % 2 === 0){
        console.log(i);
    }else{
        continue
    }
}

//10.Guard Clause
//example:
function getUserDashboardLink(user) {
    if (user) {
        if (user.isLoggedIn) {
            if (user.hasSubscription) {
                return "/dashboard";
            }
        }
    }

    return "/error";
}

// we write with gaurd clause
function getUserDashboardLink(user) {
    if (!user) return "/error";
    if (!user.isLoggedIn) return "/login";
    if (!user.hasSubscription) return "/pricing";

    return "/dashboard";
}



//exercise
const user = {
    isLoggedIn: true,
    isActive: true
};

function getAccessMessage(user) {
    if(!user) return "error";
    if(!user.isLoggedIn) return "please login";
    if(!user.isActive) return "Account inactive";
    return "Access granted";
}

const user1 = {
    isLoggedIn: true,
    isActive: true
};

const user2 = {
    isLoggedIn: false,
    isActive: true
};

const user3 = {
    isLoggedIn: true,
    isActive: false
};

console.log(getAccessMessage(user1));
console.log(getAccessMessage(user2));
console.log(getAccessMessage(user3));