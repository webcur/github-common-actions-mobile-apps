const exec = require("child_process").execSync;
const ncp = require("copy-paste");
const { exit } = require("process");

console.log("Encoding keystore properties file to Base64...");

const keyPassword = process.argv.length > 2 ? process.argv[2] : "password";
const storePassword = process.argv.length > 3 ? process.argv[3] : "password";
const keyAlias = process.argv.length > 4 ? process.argv[4] : "key-alias";

exec(`sed -i 's/storePassword=xxxxx/storePassword=${storePassword}/g' key.properties`);
exec(`sed -i 's/keyPassword=xxxxx/keyPassword=${keyPassword}/g' key.properties`);
exec(`sed -i 's/keyAlias=xxxxx/keyAlias=${keyAlias}/g' key.properties`);

const keyPropertiesBase64 = exec('base64 -w 0 key.properties').toString();

exec(`sed -i 's/storePassword=${storePassword}/storePassword=xxxxx/g' key.properties`);
exec(`sed -i 's/keyPassword=${keyPassword}/keyPassword=xxxxx/g' key.properties`);
exec(`sed -i 's/keyAlias=${keyAlias}/keyAlias=xxxxx/g' key.properties`);

ncp.copy(keyPropertiesBase64, function () {
    console.log("keystore properties file encoded to Base64 and copied to clipboard.");
    exit(0);
});
