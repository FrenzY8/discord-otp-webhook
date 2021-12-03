# login-otp-nodejs
A OTP Code with readline (Simple)

# what is the use of an encrypted webhook
- If you are a tool maker in NodeJs or Anti-DDOS in Nodejs, you can use this if you want your tools to be ```safe from thieves```.
- However, if you use a webhook, your webhook ```can be stolen``` if you use the ```manual``` method,
- We made this so that your webhook is safe from hackers who try to find your ```webhook/leaks```
- If your webhook is successfully obtained by the Hackers, usually they will perform ```Spam Tag actions```, which are very annoying and can ```destroy``` servers (Discord)
- Your webhook will be safe if you use this method (this code) because we store it in a different file ```(webhook.json)``` and it has been encrypted by ```Cryptr```
# editing the files
```edit webhook.json```
```json
{
    "headerWeb": "https://discordapp.com/api/",
    "bodyWeb": "webhooks/xxxxxxxxxxxxxxxxxxx/",
    "tokenWeb": "xxxxxxxxxxxxxxxxxxxxxxxxxxxx"
}
```
- Normal webhook url is ```https://discordapp.com/api/webhooks/12345678901234567890/_ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ```
- Put *https://discordapp.com/api/* as ```headerWeb```
- Put *webhooks/12345678901234567890/* as ```bodyWeb```
- Put *_ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ* as ```tokenWeb```

# information
This otp is Strong, your webhook never leaked/showed/decrypted, so ya use the webhook.json

# example
```js
function frenzyOTP(len) {
  var str = "";                          
  for (var i = 0; i < len; i++) { // Loop the len
    // GENERATE THE OTP
    var rand = Math.floor(Math.random() * 62);
    var charCode = rand += rand > 9 ? (rand < 36 ? 55 : 61) : 48; 
    str += String.fromCharCode(charCode);  // (function))    
  }
// then => returned
  return str;
  console.log(frenzyOTP(6));
// '6' is number for OTP Words
}
```

# component thats you need
- Nodejs

# running
- node (mainfile).js

# to do list
- nothing

# main file
your_otp.js

# Support
[Saweria](https://saweria.co/FrenzyS6)
