const denom = [
    { name: 'PENNY', val: 0.01}
	{ name: 'NICKEL', val: 0.05},
	{ name: 'DIME', val: 0.1},
	{ name: 'QUARTER', val: 0.25},
	{ name: 'ONE', val: 1},
	{ name: 'FIVE', val: 5},
	{ name: 'TEN', val: 10},
	{ name: 'TWENTY', val: 20},
    { name: 'ONE HUNDRED', val: 100},
]

function checkCashRegister(price, cash, cid) {
    let output = {status: null, change: []}
    let change = cash - price
    let register = cid.reduce(function(acc, curr))
    let change;
    return change;
  }
  
  checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);



  
// function telephoneCheck(str) {
//     let rex1 = /^(1\s?)?\d{3}([-\s]?)\d{3}\2\d{4}$/
//     let rex2 = /^(1\s?)?\(\d{3}\)\s?\d{3}[-\s]?\d{4}$/

//     if(rex1.test(str)){
//         return true
//     }

//     else{
//         return rex2.test(str) ? true : false
//     }
//   }
  
//  console.log(telephoneCheck("(555) 555-5555"))