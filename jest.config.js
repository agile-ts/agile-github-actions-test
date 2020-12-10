// http://orlandobayo.com/blog/monorepo-testing-using-jest/

const baseConfig = require("./jest.config.base.js");

module.exports = {
  ...baseConfig,
  projects: ["<rootDir>/packages/*/jest.config.js"],
};
