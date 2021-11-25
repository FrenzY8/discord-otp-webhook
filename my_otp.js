const readline = require('readline');
var rl = readline.createInterface({ input: process.stdin, output: process.stdout })

// function for OTP
function frenzyOTP(len) {
  var str = "";                          
  for (var i = 0; i < len; i++) { // Loop the len
    // GENERATE THE OTP
    var rand = Math.floor(Math.random() * 62);
    var charCode = rand += rand > 9 ? (rand < 36 ? 55 : 61) : 48; 
    str += String.fromCharCode(charCode);  // (function))    
  }
// then => returned
  return str; // (str) the function
}
// Example : frenzyOTP( NUMBER ))
// Use : frenzyOTP(6) Normal OTP is 6 Words

// make let for Readline function
let otpFunction = frenzyOTP(6); // You can set the number/words as you like
console.log(`before you go, please write ${otpFunction}`)
rl.question("Enter the OTP : ", rlOtp => {
  // Anti-Cheat
  if(rlOtp == "") {
    console.log("Please enter the otp :3")
  } else {
    if(rlOtp == otpFunction) {
      console.log("True OTP!")
      // CODE HERE

    } else {
      console.log("Wrong OTP, you're not Human.")
    }
  }
})