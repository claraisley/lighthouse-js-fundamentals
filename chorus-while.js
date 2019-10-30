const chorus = "Let's dance!";
let repeat = 0;
while (repeat < 10) {
    console.log(chorus);
    repeat++;
}
 console.log("Until the sun comes up!");

// first while loop repeats 10 times

 while(repeat < 10) {
     if(repeat === 5) {
         console.log("*change key*");
     }
     console.log(chorus);
     repeat++;
 }

 console.log("Until the sun comes up!");

 // second while loop reapts 10 times with a key chenge in the middle