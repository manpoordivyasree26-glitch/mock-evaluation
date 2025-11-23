//Q10 simple closures
function counter(){
    let count=0;
    function inner(){
        count=count+1;
        return count;
    }
    return inner;
}
const c = counter();
console.log(c()); 
console.log(c()); 
console.log(c());
//Q11 Medium closure
function createWallet(){
    let balance=0;
    function addMoney(amount){
        balance=balance+amount;
    }
    function checkBalance(){
        console.log(balance);
    }
    return {
        addMoney: addMoney,
        checkBalance: checkBalance
    };
}
let myWallet = createWallet();
myWallet.addMoney(500);
myWallet.addMoney(200);
myWallet.checkBalance();  // should show 700
