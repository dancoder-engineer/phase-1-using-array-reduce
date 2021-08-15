const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

let totalBatteries = 0;
// Code your solution here

function reducer() {
    
    function batteries(totalBatterie, i) { return totalBatterie += i; }


    totalBatteries =  batteryBatches.reduce(batteries, 0);
}

console.log(reducer());