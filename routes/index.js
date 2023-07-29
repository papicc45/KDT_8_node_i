import express from 'express'
import path from 'path'

const app = express();
const PORT = 8000;
const __dirname = path.resolve('../');
//
// //뷰 엔진
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// 정적 파일 불러오기
// app.use('public', express.static(__dirname + '/public/stylesheets/style.css'));
// app.use(express.static('public'));
app.use('/static', express.static(__dirname + '/public'));
app.get('/', (req, res) => {
    // res.send({result : true, code : 1000, message : '회원가입에 성공하였습니다.'});
    // res.render('index', {data : [2, 3, 4, 5, 6, 7, 8, 9]});
    res.render('index');
})



app.listen(PORT, ()=> {

console.log(`http://localhost:${PORT}`);
console.log(__dirname);
})
