import ncrypt from "ncrypt-js";
import exportedValue from './mockValueSender.js';

let customer = JSON.parse(exportedValue);
let data = customer.state+customer.license;
let secretpassword = "09102022";
var ncryptObject = new ncrypt(secretpassword);

var encryptedData = ncryptObject.encrypt(data);







export default encryptedData
