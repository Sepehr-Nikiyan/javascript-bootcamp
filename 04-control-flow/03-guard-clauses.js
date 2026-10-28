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