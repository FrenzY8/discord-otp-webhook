/*** YOUR TOOLS WITH OTP DISCORD WEBHOOK ***/

// Thanks for use this script but if you wanted to recode/something re-publish
// please mention the creator, you can read License Permission for more info
// your webhook is never leaked, so ya, use thats (webhook.json)
// Impostors will never can get your webhook, cause it Encrypted
// Thanks to 'Cryptr' on npm to helps me get it.
// Donates me in (saweria.co/FrenzyS6)

/*** Thank You For Use This ***/

/*** Load Files ***/
const readline = require('readline');
const Cryptr = require('cryptr')
const cryptr = new Cryptr('myTotalySecretKey')
var rl = readline.createInterface({ input: process.stdin, output: process.stdout })
const {
    Webhook
} = require('discord-webhook-node')

/*** load your webhook ***/
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

/*** create the webhook one ***/
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

/*** Example : frenzyOTP( NUMBER )) ***/
// Use : frenzyOTP(6) Normal OTP is 6 Words

/*** make let for Readline function ***/
let otpFunction = frenzyOTP(6); // You can set the number/words as you like

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

/********** LICENSE **********/
/*
THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
/********** END OF LICENSED **********/

// Created by FrenzySG (saweria.co/FrenzyS6)
// Idea/Maker : FrenzySG
// Encryptor : Cryptr
