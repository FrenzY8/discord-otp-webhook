/*** YOUR TOOLS WITH OTP DISCORD WEBHOOK ***/

// Thanks for use this script but if you wanted to recode/something re-publish
// please mention the creator, you can read License Permission for more info
// your webhook is never leaked, so ya, use thats (webhook.json)
// Impostors will never can get your webhook, cause it Encrypted
// Thanks to 'Cryptr' on npm to helps me get it.
// Donates me in (saweria.co/FrenzyS6)

/*** Thank You For Use This ***/

const readline = require('readline');
const Cryptr = require('cryptr')
const cryptr = new Cryptr('myTotalySecretKey')
var rl = readline.createInterface({ input: process.stdin, output: process.stdout })
const {
    Webhook
} = require('discord-webhook-node')

// load your webhook
const { headerWeb, bodyWeb, tokenWeb } = require('./webhook.json');

/*** ENCRYPT DECRYPT ***/ 
// encrypt the Webhook
let headerEnc = cryptr.encrypt(headerWeb);
let bodyEnc = cryptr.encrypt(bodyWeb);
let tokenEnc = cryptr.encrypt(tokenWeb);

// decrypt the webhook
let headerDec = cryptr.decrypt(headerEnc);
let bodyDec = cryptr.decrypt(bodyEnc);
let tokenDec = cryptr.decrypt(tokenEnc);

// create the webhook one
const webhookMsg = new Webhook("" + headerDec + bodyDec + tokenDec + "")
let saveall = "Done.";

/*** THE OTP FUNCTION ***/
function frenzyOTP(len) {
  var str = "";                          
  for (var i = 0; i < len; i++) { // Loop the len
    /*** GENERATE THE OTP ***/
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
// Pesan.send(otpFunction)

// Webhook Tester 
// console.log("" + headerDec + bodyDec + tokenDec + "")

/*** Send the OTP Code ***/
webhookMsg.send(`Eyo new OTP code has generated.\n> ${otpFunction}`);

/*** GAVE THEY NOTIFICATIONS ***/
console.log("[+] Go to your channel webhook to see OTP")
rl.question("Enter the OTP : ", rlOtp => {
  // Anti-Cheat
  if(rlOtp == "") {
    console.log("Please enter the otp :3")
  } else {
    if(rlOtp == otpFunction) {
      console.log("True OTP!")
      // CODE HERE
      console.log(saveall);
    } else {
      console.log("Wrong OTP, you're not Human.")
    }
  }
})
