const express = require('express');
const app = express();
const PORT = 8000;

// express에 사용할 템플릿 엔진 종류를 ejs로 등록
app.set("view engine", "ejs");
// 템플릿 엔진 파일을 저장할 위치 등록 (default 폴더명 views)
app.set("views", "./views");

// static 미들웨어 등록 (정적 파일 로드 ex. css, js, img, ...)
// static 이라는 실제 폴더를 public 이라는 이름으로 접근하겠다. 
app.use("/public", express.static(__dirname + "/static")); //상대경로로 해도 가능
console.log(__dirname); // ~~~/KDT-Web-14/09-node.js/09-3_express


// app.get(경로, 해당 경로로 들어왔을 떄 실행할 함수)
// 요청 메서드: get
// 요청 주소: "/" -> "서버 주소:포트번호/" -> "http://localhost:8000"
app.get('/', function (req, res){  // 요청, 응답
    // res.send(응답 내용)
    // res.send('hello express');

    // index.ejs 라는 파일을 렌더
    res.render("index", {btns: ["사과", "오렌지", "키위"], 
        isLogin: true,
        me: {
            name: "영채",
            msg: "반갑습니다.",
        },
    });
});

// login 경로로 요청이 들어오면 로그인 페이지 응답
app.get('/login', function(req, res){
    res.render("login");
});

app.get('/register', function(req, res){
    res.render("register");
});

app.listen(PORT, function () {
    console.log(`server listening on ${PORT}! http://localhost:${PORT}`);
})