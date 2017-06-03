# Byteball Double Up (gambling game)



## Gameplay
After pairing with the bot, you can send it any amount of bytes and you'll have a 48/100 chance to double up. As soon as you win, you get paid in the address from which you sent.


## Features
- provably fair
- public list of all the bets

## How to run this in the Byteball testnet:
1. in conf.js make sure this is the hub selected:
```
exports.hub = 'byteball.org/bb-test';
```
2. run this command:
```
sed -ie "s/version = '1.0'/version = '1.0t'/; s/alt = '1'/alt = '2'/" node_modules/byteballcore/constants.js
```

## How to pair with this bot in the Byteball mainnet:
I'm a shitty programmer. This ain't done yet.