import express from 'express';
import multer from 'multer';
import path from 'path';

const app = express();
const PORT = 8000;
const __dirname = path.resolve('../');

//multer 세팅
const upload = multer({
    dest: '../public/uploads/',         //dest : 업로드 파일을 저장할 경로 지정
});

const uploadDetail = multer({
    // storage : 저장할 공간에 대한 정보
    // diskStorage : 파일을 디스크에 저장하기 위한 모든 제어기능 제공
    storage: multer.diskStorage({
        destination(req, file, done) {
            done(null, '../public/uploads/') //첫번째 매개변수 : 에러처리, 폴더 자동생성 되지않아 미리 폴더 생성해줘야함
        },
        filename(req, file, done) {
            const ext = path.extname(file.originalname); //파일경로 확장자
            done(null, path.basename(file.originalname, ext) + Date.now() + ext); //최종 파일명
        },
    }),
    limits: {fileSize: 1024 * 1024 * 5},  //파일 크기 제한
})

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use('/public/uploads', express.static(__dirname + '/public/uploads'));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/', (req, res) => {
    res.render('20230802');
});

//단일 파일 업로드
app.post('/upload', uploadDetail.single('userFile'), (req, res) => {
    console.log(req.file);
    console.log(req.body);
});

//여러 파일 업로드 v1
app.post('/upload/array', uploadDetail.array('userFiles'), (req, res) => {
    console.log(req.files);
    console.log(req.body);
});

//여러파일 업로드 v2
app.post('/upload/fields',
    uploadDetail.fields([{name: 'userFile1'}, {name: 'userFile2'}]),
    (req, res) => {
        console.log(req.files);
        console.log(req.body);
    });

app.post('/dynamicFile', uploadDetail.single('dynamic-userFile'), (req, res) => {
    res.send(req.file);
});

app.post('/sendUserInfo', uploadDetail.single('userFile'), (req, res) => {
    console.log(req.file);
    console.log(req.body);
    res.render('20230802_prac', {userFile: req.file.path, userInfo: req.body});
})
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});