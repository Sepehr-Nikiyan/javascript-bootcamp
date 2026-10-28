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

