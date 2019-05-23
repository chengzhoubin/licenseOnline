const rsa = require('../config').rsa;
const nodeRsa = require('node-rsa');
const strformat = require('string-format');
const snowflake = require('snowflake');

class rsahelper{
    //rsa加密
    static encryption(clearText,encryptoCallbackFunc){
        let encrypString = "";
        if(typeof(encryptoCallbackFunc) !== "undefined"){
            encryptoCallbackFunc(encrypString);
        }
        return "";
    }
}