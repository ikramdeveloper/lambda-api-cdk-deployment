import { config } from "../config";

/**
 * Adds prefix in the following format
 *
 * `{PROJECT CODE}-{CURRENT NODE ENV}-{PASSED STRING}`
 */
export const projectPrefix = (str?: string) => {
  const prefix = `${config.app.projectCode}-${config.app.env}`;

  return str ? `${prefix}-${str}` : prefix;
};
