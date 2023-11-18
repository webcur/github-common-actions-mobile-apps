const exec = require("child_process").execSync;
const ncp = require("copy-paste");
const { exit } = require("process");

console.log("Encoding ENV file to Base64...");

const jksBase64 = exec('base64 -w 0 app-env').toString();

ncp.copy(jksBase64, function () {
    console.log("ENV file encoded to Base64 and copied to clipboard.");
    exit(0);
});
