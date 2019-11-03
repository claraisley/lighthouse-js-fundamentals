function range(start, end, step){
    var series = [];
if (start > end || step <= 0 || start === undefined || end === undefined || step === undefined){
    series = [];
} else {
    for (let i = start; i <= end; i = i + step){
        series.push(i);
    }
    }
return series;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));