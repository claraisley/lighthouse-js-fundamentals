function lastIndexOf(series, num) {
 let foundMatch = false;
 let result = 0;
 for (let i = 0; i < series.length; i++){
 if (series[i] === value){
     result = i;
     foundMatch = true;
 }
 }
 if (foundMatch) {
     return result;
 } else {
     return -1;
 }
}

