const exec = require("child_process").execSync;
const ncp = require("copy-paste");
const { exit } = require("process");

console.log("Encoding Google Services JSON file to Base64...");

const googleServicesBase64 = exec('base64 -w 0 google-services.json').toString();

ncp.copy(googleServicesBase64, function () {
    console.log("Google Services JSON file encoded to Base64 and copied to clipboard.");
    exit(0);
});
