const port = process.env.PORT || 3000;
const protocol = process.env.PROTOCOL || 'http://';
const domain = process.env.DOMAIN || 'localhost';

module.exports.serverUrl = `${protocol}${domain}${port ? `:${port}` : ''}`;

module.exports.port = port;
module.exports.protocol = protocol;
module.exports.domain = domain;

module.exports.mongo = {
  uri: 'mongodb://localhost:27017/Mercury',
};
