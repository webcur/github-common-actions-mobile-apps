const exec = require("child_process").execSync;
const ncp = require("copy-paste");
const { exit } = require("process");

console.log("Encoding keystore properties file to Base64...");

const keyPropertiesBase64 = exec('base64 -w 0 key.properties').toString();

ncp.copy(keyPropertiesBase64, function () {
    console.log("keystore properties file encoded to Base64 and copied to clipboard.");
    exit(0);
});
