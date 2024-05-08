import { config as configEnv } from "dotenv";

configEnv();

const _config = {
  PORT: process.env.PORT,
};

export const config = Object.freeze(_config);
