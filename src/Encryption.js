
import exportedValue from './mockValueSender.js';
import ncrypt from 'ncrypt-js';


let customer = JSON.parse(exportedValue);

let state = customer.state;
let license = customer.license;

console.log(`Hey Anon! Glad you're here from ${state}! We documented license plate ${license}`);

let secretKey = "09102022";
let data = state+license;

var ncryptObject = new ncrypt(secretKey);
var encryptedID = ncryptObject.encrypt(data);
var decryptedHACKED = ncryptObject.decrypt(encryptedID);

console.log("Encryption: "+ encryptedID+" not encrypted: "+ decryptedHACKED);

export default encryptedID;
