import express from 'express'
import path from 'path'

const app = express();
const PORT = 8000;
const __dirname = path.resolve('../');

//뷰 엔진
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// 정적 파일경로 지정
// app.use('public', express.static(__dirname + '/public/stylesheets/style.css'));
// app.use(express.static('public'));
app.use('/static', express.static(__dirname + '/public'));

//body_parser
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/', (req, res) => {
    res.render('index');
})
// app.post('/', (req, res) => {
//     console.log(req.body);
// });

// app.get('/getForm', (req, res) => {
//     console.log(req.query);
//     res.render('result', {
//         title: 'GET 요청 폼 결과 확인하기',
//         userInfo: req.query
//     });
// });

// app.post('/postForm', (req, res) => {
//     console.log(req.body);
//     res.render('result', {
//         title: 'POST 요청 폼 결과 확인하기',
//         userInfo: req.body
//     });
// });

app.listen(PORT, () => {

    console.log(`http://localhost:${PORT}`);
    console.log(__dirname);
});
