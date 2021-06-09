const chai         = require('chai');
const expect       = chai.expect;
const UserModel    = require('../models/user');
describe("Sum to one", function() {
      sumtone
      it('data should return true if integers is single digit.', async function(){
            let data = SumToOne(35);
            /* Check and expected data.status is equal to true */
            expect(data).to.equal(12);
      });
});
function SumToOne(num) {
      var str = num.toString();
      arr = str.split("");
      var ans = 0;
      for(var y = 0 ;y <arr.length;y++){
      ans = ans + arr[y];
      }
      for(var z = 10 ; z < ans;z--){
            str = ans.toString();
            arr = str.split("");
            ans = 0;
            for(var b = 0 ; b<arr.length;b++){
                  ans = ans + parseInt(arr[b]);
            //console.log(ans);
            }
      }
      return ans;
}
// describe("Celcius to fahrenheit", function() {
//       it('data should return fahrenheit.', async function(){
//             let data = celciusToFahrenheit(0);
//             /* Check and expected data.status is equal to true */
//             expect(data).to.equal(32);
//       });
// });
// function celciusToFahrenheit(c) {
//       var f = f=(9/5 *c) +32;
//       return f;
// }

// describe("Double", function() {
//       it('data should return double value of array.', async function(){
//             let data = double([1,2,3]);
//             /* Check and expected data.status is equal to true */
//             expect(data).to.deep.equal([2,4,6]);
//       });
// });
// function double(arr) {
//       var ans;
//       for(var x = 0 ; x < arr.length;x++){
//       arr[x] = arr[x] * 2;
//       }
//       return arr;
// }

// describe("returnArrayCountGreaterThanY", function() {
//       it('data should return array count whos greater than y', async function(){
//             let data = returnArrayCountGreaterThanY([2,3,5], 4);
//             /* Check and expected data.status is equal to true */
//             expect(data).to.equal(1);
//       });
// });
// function returnArrayCountGreaterThanY(arr, y) {
//       var counter = 0;
//       for(var x = 0 ; x < arr.length; x++){
//       if (arr[x]>y){
//             counter++;   
//       }
//       }
//       return counter;
// }

// describe("Sigma", function() {
//       it('data should return the sum of all postive integers', async function(){
//             let data = sigma(3);
//             /* Check and expected data.status is equal to true */
//             expect(data).to.equal(6);
//       });
// });
// function sigma(num) {
//       var ans=0;
//       for(var x = 0 ;x <=num ; x++){
//       ans = ans + x;
//       }
//       return ans;

// }
// describe("Factorial", function() {
//       it('data should return factorial number', async function(){
//             let data = factorial(3);
//             /* Check and expected data.status is equal to true */
//             expect(data).to.equal(6);
//       });
// });

// function factorial(num) {
//       var ans = 1;
//       for(var x = 1 ; x <= num ; x++){
//       ans = ans * x;
//       }
//       return ans;
// }

// describe("swapTowardCenter", function() {
//       it('data should return factorial number', async function(){
//             let data = swapTowardCenter([true,42,"Ada",2,"pizza"]);
//             /* Check and expected data.status is equal to true */
//             expect(data).to.deep.equal(["pizza",2,"Ada",42,true]);
//       });
// });

// function swapTowardCenter(arr) {
//       for(var x = 0 ; x < arr.length ; x++){
//             for(var y = x ; y < arr.length;y++){
//                   var temp = arr[y];
//                   arr[y] = arr[x];
//                   arr[x] = temp;
//             }
//       }
//       return arr;
// }
// describe("User Model", function() {
//     it("Given a valid input, it should return true if we successfully create a new user", async function(){
//         let userModel   = new UserModel();
//         let params      = {"name": "Oliver Rosales", "email": "jrosales@village88.com", "password": "password123"};

//         let result = await userModel.createUser(params);

//         expect(result).to.equal(true);
//     });
// });