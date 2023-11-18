const exec = require("child_process").execSync;
const ncp = require("copy-paste");
const { exit } = require("process");
const fs = require('fs');

console.log("Encoding Firebase Service Account JSON file to Base64...");

const firebaseAppDistributionServiceAccountBase64 = fs.readFileSync('firebase-service-account.json');

ncp.copy(firebaseAppDistributionServiceAccountBase64, function () {
    console.log("Firebase Service Account JSON file encoded to Base64 and copied to clipboard.");
    exit(0);
});
