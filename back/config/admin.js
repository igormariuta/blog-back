module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '8d89f65dd9fcf4d452ecd8c725288478'),
  },
});
