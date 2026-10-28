const greet = () => console.log("Hello JavaScript");
const runningLogger = () => console.log("Running...");

function timer() {
    const stopTimer = () => clearInterval(runningLoggerID);
    setTimeout(greet, 2000);
    const runningLoggerID = setInterval(runningLogger,1000);
    setTimeout(stopTimer,5000);
}

timer();

//clear interval should get an id to work
//set time out and set interval should get a function name to work