module.exports.error = (res, message, status = 400) => res.status(status).json({ message }).end();

module.exports.success = (res, body, status = 200) => res.status(status).json(body).end();
