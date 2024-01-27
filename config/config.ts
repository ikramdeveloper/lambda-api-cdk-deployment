import * as dotenv from "dotenv";

import { join } from "path";

const env = process.env.NODE_ENV;

if (!env) {
  throw new Error("NODE_ENV not present");
}

dotenv.config({
  path: join(__dirname, `../.env.${env}`),
});

const envs = {
  NODE_ENV: String(process.env.NODE_ENV),
  PROJECT_NAME: String(process.env.PROJECT_NAME),
  PROJECT_CODE: String(process.env.PROJECT_CODE),
  // other environment variables
};

export const config = {
  /** App related values */
  app: {
    env: envs.NODE_ENV,
    projectName: envs.PROJECT_NAME,
    projectCode: envs.PROJECT_CODE,
  },
  /** Other values */
};
