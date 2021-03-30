const fs = require("fs");
const colors = require("colors");
const dotenv = require("dotenv");

dotenv.config();

function writeEnvironmentFile(
  filename: string,
  fileContent: string
): void {
  const filePath = `./src/environments/${filename}`;
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
  ENVIRONMENT: "${process.env.ENVIRONMENT}"
};

`;

const envProdFile = `
export const environment = {
  production: false,
  ENVIRONMENT: "${process.env.ENVIRONMENT}"
};

`;

writeEnvironmentFile("environment.ts", envFile);
writeEnvironmentFile("environment.prod.ts", envProdFile);
