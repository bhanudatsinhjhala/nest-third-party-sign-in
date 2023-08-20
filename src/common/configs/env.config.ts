import * as dotenv from 'dotenv';

const getEnvFile = (): string => `.env.${process.env.NODE_ENV}`;
dotenv.config({ path: getEnvFile() });
const env = {
  PORT: process.env.PORT,
  NODE_ENV: process.env.NODE_ENV,
};

export default env;
