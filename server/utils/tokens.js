module.exports.generate = (length = 10, isNumeric = false) => {
  let token = '';
  const allowedChars = isNumeric ? '0123456789' : 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < length; i += 1) {
    token += allowedChars.charAt(Math.floor(Math.random() * allowedChars.length));
  }

  return token;
};
