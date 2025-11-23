//Q8
//1
let nums = [10, 3, 7, 20, 13, 2];
let square=nums.map(function(n){
    return n*n;
});
console.log(square);
//2
let primes =nums.filter(function(n){
    if(n<2){
        return false;
    }
  for(let i=2; i<n; i++) {
    if(n%i===0){
        return false;
    }
  }
  return true;
});
console.log(primes);
//3
let sum=nums.reduce(function(acc,curr){
    return acc+curr;
},0);
console.log(sum);
//4
let sorted=nums.slice().sort(function(a,b){
    return b-a;
});
console.log(sorted);
//Q9 
function displayCar(){
    console.log("This is a car")
}
function displayTruck(){
    console.log("this is a Truck")
}
function displayBike(){
    console.log("This is s bike")
}
 function vehicleInfo(vehicleCategory, callbackFn)
{
console.log("Vehicle Category:", vehicleCategory);
callbackFn();
}
vehicleInfo("Car", displayCar)
vehicleInfo("Truck", displayTruck)
vehicleInfo("Bike", displayBike)
