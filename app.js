// // var createErr(or = require('http-errors');
// import createError from 'http-errors'
// // var express = require('express');
// import express from 'express'
// // var path = require('path');
// import path from 'path';
// // var cookieParser = require('cookie-parser');
// // var logger = require('morgan');
// import { fileURLToPath } from 'url';
//
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
//
// // import indexRouter from '/routes/index'
// import userRouter from './routes/users'
// const app = express();
// app.set('port', process.env.PORT || 8000);
// app.use((req, res, next) => {
//   console.log('미들웨어');
//   next();
// });
//
// app.use('/index', indexRouter);
// app.use('/user', userRouter);
//
// app.listen(app.get('port'), ()=> {
//   console.log('서버 실행');
// });

import express from 'express'
import path from 'path'

const app = express();
const PORT = 8000;
const __dirname = path.resolve();
//
// //뷰 엔진
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// 정적 파일 불러오기
// app.use('public', express.static(__dirname + '/public/stylesheets/style.css'));
// app.use(express.static('public'));
// app.use('/static', express.static(__dirname + '/public'));


app.get('/', (req, res)=> {
   res.render('index', { data : '요청없음'});
});
app.get('/api/v1', (req, res)=> {
    res.render('index', {data : '요청1 api/v1'});

});
app.get('/api/v2', (req, res)=> {
    res.render('index', {data : '요청 2 api/v2'});
});
app.get('/api/v3', (req, res)=> {
    res.render('index', {data : '요청 3 api/v3'});
});


app.listen(PORT, ()=> {
    console.log(`http://localhost:${PORT}`);
    console.log(__dirname);
})

