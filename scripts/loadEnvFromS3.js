// This scripts updates local .env with S3 env by appending new variables and overwriting local variables

const path = require('path');
const { 
  parseEnvFile, 
  fetchEnvFromS3, 
  readLocalEnvFile, 
  writeLocalEnvFile 
} = require('./utils/s3Utils');



const updateLocalEnvFile = async () => {
  try {
    // Fetch the .env file content from S3
    const s3EnvContent = await fetchEnvFromS3();

    // Parse the S3 .env content
    const s3EnvVars = parseEnvFile(s3EnvContent);

    const localEnvFilePath = path.resolve(__dirname, '..','.env');

    // Read the local .env file content
    const localEnvContent = readLocalEnvFile(localEnvFilePath);

    // Parse local .env content
    const localEnvVars = parseEnvFile(localEnvContent);

    // Merge S3 .env file with local .env file
    Object.keys(s3EnvVars).forEach((key) => {
      // Overwrite local .env 
      localEnvVars[key] = s3EnvVars[key];
    });

    //updated .env content
    const updatedEnvContent = Object.entries(localEnvVars)
      .map(([key, value]) => `${key}=${value}`)
      .join('\n');

    // Write updated .env to the local .env file
    writeLocalEnvFile(localEnvFilePath, updatedEnvContent);
    console.log('Successfully updated local .env from S3 env.');
  } catch (err) {
    console.error('Error fetching or updating .env file from S3:', err);
  }
};


updateLocalEnvFile();
