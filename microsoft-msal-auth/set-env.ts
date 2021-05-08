const path = require("path");
const fs = require("fs");
const colors = require("colors");
const dotenv = require("dotenv");

dotenv.config();

function writeEnvironmentFile(
  filename: string,
  fileContent: string
): void {
  const environmentFolder = path.join(__dirname, "src/environments");
  const filePath = path.join(environmentFolder, filename);

  if (!fs.existsSync(path.join(environmentFolder, filename))) {
    fs.appendFile(filePath, "", function (err: any) {
      if (err) throw err;
    });
  }
  
  // Logs
  console.log(colors.magenta(`The file "${filename}" will be written with the following content:`));
  console.log(colors.grey(fileContent));

  // Writting environment file
  fs.writeFile(filePath, fileContent, function (err: any) {
    if (err) throw console.error(err);
    else {
      console.log(colors.magenta(`Angular "${filename}" file generated correctly at ${filePath}`));
    }
  });
}


const envFile = `
export const environment = {
  production: false,
  MICROSOFT_CLIENT_ID: "${process.env.MICROSOFT_CLIENT_ID}",
  MICROSOFT_REDIRECT_URI: "${process.env.MICROSOFT_REDIRECT_URI}"
};

`;

const envProdFile = `
export const environment = {
  production: true,
  MICROSOFT_CLIENT_ID: "${process.env.MICROSOFT_CLIENT_ID}",
  MICROSOFT_REDIRECT_URI: "${process.env.MICROSOFT_REDIRECT_URI}"
};

`;

writeEnvironmentFile("environment.ts", envFile);
writeEnvironmentFile("environment.prod.ts", envProdFile);
