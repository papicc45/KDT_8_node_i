import express from 'express'
import path from "path";

const app = express();
const PORT = 8000;
const __dirname = path.resolve('../');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use('/static', express.static(__dirname + '/public'));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/', (req, res) => {
    res.render('20230801');
})

//ajax
app.get('/ajax', (req, res) => {
    console.log('back', req.query);
    res.send(req.query);
});

app.post('/ajax', (req, res) => {
    console.log('back', req.body);
    res.send(req.body);
});

//axios
app.get('/axios', (req, res) => {
    console.log('back', req.query);
    res.send(req.query);
});
app.post('/axios', (req, res) => {
    console.log('back', req.body);
    res.send(req.body);
});

//fetch
app.get('/fetch', (req, res) => {
    console.log('back', req.query);
    res.send(req.query);
})
app.post('/fetch', (req, res) => {
    console.log('back', req.body);
    res.send(req.body);
})

//server
app.listen(PORT, () => {
    console.log(`http://locallhost:${PORT}`);
});