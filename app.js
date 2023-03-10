const express = require('express');
const nunjucks = require('nunjucks');
const path = require('path')
const indexRouter = require('./routes/index');

const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
nunjucks.configure('views', {
    autoescape: true,
    express: app,
});

app.get('/', async function (req, res, next) {
    res.render('index.njk', {
        message: 'Ost',
        title: 'Nunjucks hello world',
    });
});
app.use(express.static('public'))
app.use('/', indexRouter);