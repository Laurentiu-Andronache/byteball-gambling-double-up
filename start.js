"use strict";
var conf = require('byteballcore/conf.js');
var headlessWallet = require('headless-byteball');
var db = require('byteballcore/db.js');
var eventBus = require('byteballcore/event_bus.js');
var device = require('byteballcore/device.js');
require('byteballcore/wallet.js');


headlessWallet.setupChatEventHandlers();

eventBus.on('paired', function(from_address){
    console.log('Paired with: ' + from_address);
    device.sendMessageToDevice(from_address, 'text', 'Hi! My name is Double Up. What is your name?');
});