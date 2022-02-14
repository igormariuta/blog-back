module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '292ae33593b4905bea8e6c59460ef9c4'),
  },
});
