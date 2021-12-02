const readline = require('readline');
var rl = readline.createInterface({ input: process.stdin, output: process.stdout })
const {
    Webhook
} = require('discord-webhook-node')
const { headerWeb, bodyWeb, tokenWeb } = require('./webhook.json');
const Pesan = new Webhook("" + headerWeb + bodyWeb + tokenWeb + "")
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

// Sending the OTP to webhook (pesan = my const)
Pesan.send(otpFunction)

// then give they notification
console.log("Go to your channel webhook to see OTP")
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
