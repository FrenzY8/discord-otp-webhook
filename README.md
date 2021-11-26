# login-otp-nodejs
A OTP Code with readline (Simple)

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
