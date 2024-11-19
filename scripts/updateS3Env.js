const path = require('path');
const {
  parseEnvFile,
  fetchEnvFromS3,
  readLocalEnvFile,
  uploadEnvToS3,
} = require('./utils/s3Utils');

// update the S3 .env with local .env
const updateS3EnvFile = async () => {
  try {
    // Read the local .env file
    const localEnvFilePath = path.resolve(__dirname, '.env');
    const localEnvContent = readLocalEnvFile(localEnvFilePath);

    // Parse the local .env content
    const localEnvVars = parseEnvFile(localEnvContent);

    // Fetch the S3 .env
    const s3EnvContent = await fetchEnvFromS3();
    const s3EnvVars = s3EnvContent ? parseEnvFile(s3EnvContent) : {};

    // Merge local .env content with S3 
    Object.keys(localEnvVars).forEach((key) => {
      // Overwrite or add local variables to S3
      s3EnvVars[key] = localEnvVars[key];
    });

    // update .env content for S3
    const updatedEnvContent = Object.entries(s3EnvVars)
      .map(([key, value]) => `${key}=${value}`)
      .join('\n');

    // Upload .env content to S3
    await uploadEnvToS3(updatedEnvContent);

  } catch (err) {
    console.error('Error updating .env file in S3:', err);
  }
};

updateS3EnvFile();
