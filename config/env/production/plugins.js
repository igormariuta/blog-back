const parse = require("pg-connection-string").parse;
const config = parse(process.env.CLOUDINARY_URL);
module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: config.cloud_name,
        api_key: config.api_key,
        api_secret: config.api_secret,
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
  // ...
});
