import express from 'express';
import path from 'path';

import routes from './routes/index';
import ejs from 'ejs';
let app = express();

app.set('view engine','ejs');
app.engine('.html', ejs.__express);
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname,'public')));

app.use('/',routes);
module.exports = app;