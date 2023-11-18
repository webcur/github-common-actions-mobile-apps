const exec = require("child_process").execSync;
const ncp = require("copy-paste");
const { exit } = require("process");
const fs = require('fs');

console.log("Encoding Google Play Service Account JSON file to Base64...");

const googlePlayServiceAccountBase64 = fs.readFileSync('google-play-service-account.json');

ncp.copy(googlePlayServiceAccountBase64, function () {
    console.log("Google Play Service Account JSON file encoded to Base64 and copied to clipboard.");
    exit(0);
});
