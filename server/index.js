const bodyParser = require('body-parser');
const compression = require('compression');
const cookieParser = require('cookie-parser');
const express = require('express');
const http = require('http');

const config = require('./config');
const routes = require('./routes');

const app = express();

app.use(bodyParser.json());
app.use(compression());
app.use(cookieParser());

app.use('/', routes());

http.createServer(app).listen(config.port);
console.log(`
Listening on ${config.serverUrl}
ooo        ooooo
 88.       .888
 888b     d'888   .ooooo.  oooo d8b  .ooooo.  oooo  oooo  oooo d8b oooo    ooo
 8 Y88. .P  888  d88'  88b  888""8P d88'  "Y8  888   888   888""8P   88.  .8'
 8   888    888  888ooo888  888     888        888   888   888        88..8'
 8    Y     888  888    .o  888     888   .o8  888   888   888         888'
o8o        o888o  Y8bod8P' d888b     Y8bod8P'   V88V"V8P' d888b        .8'
                                                                   .o..P'
                                                                    Y8P'

`);
