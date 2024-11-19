const { S3Client, GetObjectCommand, PutObjectCommand } = require('@aws-sdk/client-s3');
const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');

// Load environment variables from the local .env file
dotenv.config({ path: '.env' });


// Create an S3 client using AWS SDK
const client = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

const bucketName = 'baby-inventory';
const objectKey = 'env'; // S3 object key for the .env file

// Function to parse a .env file content into key-value pairs
const parseEnvFile = (content) => {
  const envVars = {};
  content.split('\n').forEach((line) => {
    if (line && !line.startsWith('#')) {
      const [key, value] = line.split('=');
      if (key && value) {
        envVars[key.trim()] = value.trim();
      }
    }
  });
  return envVars;
};

// Function to fetch the .env content from S3
const fetchEnvFromS3 = async () => {
  const params = { Bucket: bucketName, Key: objectKey };
  try {
    const command = new GetObjectCommand(params);
    const data = await client.send(command);

    const bodyContents = await new Promise((resolve, reject) => {
      const chunks = [];
      data.Body.on('data', (chunk) => chunks.push(chunk));
      data.Body.on('end', () => resolve(Buffer.concat(chunks).toString('utf-8')));
      data.Body.on('error', reject);
    });

    return bodyContents; 
  } catch (err) {
    console.error('Error fetching .env file from S3:', err);
    return null; 
  }
};

// Function to read the local .env content
const readLocalEnvFile = (localEnvFilePath) => {
  let localEnvContent = '';
  try {
    localEnvContent = fs.readFileSync(localEnvFilePath, 'utf-8');
  } catch (error) {
    console.warn('.env file not found locally, creating a new one.');
  }
  return localEnvContent;
};

// Function to upload content to S3
const uploadEnvToS3 = async (envContent) => {
  const params = {
    Bucket: bucketName,
    Key: objectKey,
    Body: envContent,
    ContentType: 'text/plain',
  };

  try {
    const command = new PutObjectCommand(params);
    await client.send(command);
    console.log('Successfully uploaded .env to S3.');
  } catch (err) {
    console.error('Error uploading .env file to S3:', err);
  }
};

const writeLocalEnvFile = (filePath, content) => {
  fs.writeFileSync(filePath, content, 'utf-8');
};




module.exports = { 
  parseEnvFile, 
  fetchEnvFromS3, 
  readLocalEnvFile, 
  uploadEnvToS3,
  writeLocalEnvFile
};
