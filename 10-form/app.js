const express = require('express');
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.set("views", "./views");

// 미들웨어: 요청과 응답 사이에서 작업하는 코드
// app.use() 로 등록

// req.body 객체를 해석할 수 있도록 body-parser 미들웨어 등록
app.use(express.urlencoded({extended: true}));  // post 요청으로 들어오는 모든 형식의 데이터를 파싱
app.use(express.json());  // json 형식의 데이터를 해석하고, 주고 받게 해줌

// 라우팅(Routing): 주소 설정
app.get('/', function(req, res){
    console.log(req.query);
    res.render('index')
})

// GET '/login'
// get 방식은 클라이언트에서 보낸 데이터(?key=value&key=value...)가 req.query에 저장
app.get('/login', function(req, res){
    console.log(req.query);
    // res.send("get 요청 성공!");
    // res.render("index"); // 한 번만 응답을 보내야 함
    res.render("result", {title: "Get 요청", userInfo: req.query});
})

// POST '/login'
// POST 방식은 클라이어언트에서 보낸 데이ㅓ가 req.body에 저장
app.post('/login', function(req, res) {
    console.log(req.body);
    // res.send("POST 요청 성공");
    res.render("result", {title: "POST 요청", userInfo: req.body});
    
})

app.post("/js-form-check", function(req, res){
    console.log(req.body);
    res.send("js validation 성공");
})

app.post('/practice', function(req, res){
    console.log(req.query);
    res.render("result", {title: "practice", userInfo: req.body});
})


app.listen(PORT, function() {
    console.log(`${PORT} is opened`);
});

