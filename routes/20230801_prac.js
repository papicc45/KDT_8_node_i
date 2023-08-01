import express from 'express'
import path from "path";

const app = express();
const PORT = 8000;
const __dirname = path.resolve('../');

const id = 'dlehdwns12';
const pwd = '!pwd1234';

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use('/static', express.static(__dirname + '/public'));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/', (req, res) => {
    res.render('20230801_prac');
})

app.get('/signup', (req, res) => {
    res.send(req.query);
})

app.post('/login', (req, res) => {
    if (req.body.id === id && req.body.pwd === pwd) {
        console.log("id, pwd 일치");
        res.send({'loginCheck': true});
    } else {
        console.log("id, pwd 불일치");
        res.send({'loginCheck': false});
    }
})


//server
app.listen(PORT, () => {
    console.log(`http://locallhost:${PORT}`);
});