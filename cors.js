const whitelist = ['http://localhost:4000', 'http://localhost:3000'];
const corsOptionsDelegate = (req, callback) => {
  let corsOptions;
  if (whitelist.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true, credentials: true };
  } else {
    corsOptions = { origin: false };
  }
  callback(null, corsOptions);
};
exports.corsWithOptions = corsOptionsDelegate;
