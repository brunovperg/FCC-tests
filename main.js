// let convertToRoman = function(num){
//     let decimalValue = [1000, 900, 500, 400, 100, 90,  50, 40, 10, 9, 5, 4, 1]
//     var romanNumeral = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']

//     let romanized = ''

//     for(let index = 0 ; index < decimalValue.length; index++){
//         while(decimalValue[index] <= num){
//             romanized += romanNumeral[index]
//             num -= decimalValue[index]
//         }
//     }
//     return romanized
// }
// console.log(convertToRoman(3999))


// const denom = [
//     { name: 'ONE HUNDRED', val: 100},
// 	{ name: 'TWENTY', val: 20},
// 	{ name: 'TEN', val: 10},
// 	{ name: 'FIVE', val: 5},
// 	{ name: 'ONE', val: 1},
// 	{ name: 'QUARTER', val: 0.25},
// 	{ name: 'DIME', val: 0.1},
// 	{ name: 'NICKEL', val: 0.05},
//     { name: 'PENNY', val: 0.01}
// ]

// function checkCashRegister(price, cash, cid) {
//     let output = {status: null, change: []}
//     let change = cash - price
//     let register = cid.reduce(function(acc, curr){
//         acc.total += curr[1]
//         acc[curr[0]] = curr[1]
//         return acc
//     },{total: 0})
//     if(register.total === change){
//         output.status = 'CLOSED'
//         output.change = cid
//         return output
//     }
//     if(register.total < change){
//         output.status = 'INSUFFICIENT_FUNDS'
//         return output
//     }
//     let change_arr = denom.reduce(function(acc, curr){
//         let value = 0
//         while(register[curr.name] > 0 &&  change >= curr.val){
//         change -= curr.val
//         register[curr.name] -= curr.val
//         value += curr.val
//         change = Math.round(change * 100) / 100;
//        }
//        if(value > 0){
//            acc.push ([curr.name, value])
//        }
//        return acc
//     }, [])
//     if(change_arr.length < 1 || change > 0){
//         output.status = 'INSUFFICIENT_FUNDS'
//         return output
//     }
//     output.status = 'OPEN'
//     output.change = change_arr
//     return output
//   }
  
//   console.log(checkCashRegister(15.20, 20, [["PENNY", 1], ["NICKEL", 1], ["DIME", 1], ["QUARTER", 1], ["ONE", 10], ["FIVE", 10], ["TEN", 100], ["TWENTY", 100], ["ONE HUNDRED", 100]]));



  
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