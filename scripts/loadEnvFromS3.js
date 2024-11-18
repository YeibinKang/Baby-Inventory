const { S3Client, GetObjectCommand } = require('@aws-sdk/client-s3');
const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');

// Relative to cd
dotenv.config({ path: '.env' });

console.log(process.env.AWS_REGION,)
// AWS SDK v3
const client = new S3Client({ 
    region: process.env.AWS_REGION,
    credentials: { 
        accessKeyId: process.env.AWS_ACCESS_KEY_ID, 
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY, 
    }
});

const bucketName = 'baby-inventory';
const objectKey = 'env'; 

const params = {
    Bucket: bucketName,
    Key: objectKey,
};

const fetchEnvFile = async () => {
    try {
        const command = new GetObjectCommand(params);
        const data = await client.send(command);

        const envFilePath = path.resolve(__dirname, '../test.env');
        const bodyContents = await new Promise((resolve, reject) => {
            const chunks = [];
            data.Body.on('data', (chunk) => chunks.push(chunk));
            data.Body.on('end', () => resolve(Buffer.concat(chunks).toString('utf-8')));
            data.Body.on('error', reject);
        });

        fs.writeFileSync(envFilePath, bodyContents);

        console.log('S3 .env content:\n', bodyContents);

        // Load the .env file
        dotenv.config({ path: envFilePath });
        console.log('Environment variables loaded from S3:');

    } catch (err) {
        console.error('Error fetching .env file from S3:', err);
    }
};

fetchEnvFile();
