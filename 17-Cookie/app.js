const express = require("express");
const session = require('express-session');
const cookie = require("express-session/session/cookie");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.set("views", "./views");

// body-parser
app.use(express.urlencoded({extended: true}));
app.use(express.json()); // json 형태로 사용하고 받겠다

// session 옵션 객체
const sessionConfig = {
    secret: "mySessionSecret",
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        maxAge: 60 * 1000, // 60초
    },
};

app.use(session(sessionConfig));

// 유저 정보
const userInfo = {
    id: "banana",
    pw: "1234",
};

app.get("/", (req, res) => {
    // req.session.user 값이 있는지 검사 -> isLogin 변수로 로그인 여부 확인
    const user = req.session.user;
    console.log(user);
    if(user !== undefined){
        res.render("index", {isLogin: true, user: user})
    } else {
        res.render("index", {isLogin: false});
    }
});

app.get("/login", (req, res) => {
    res.render("login");
});

app.post("/login", (req, res) => {

    console.log("req.body: ", req.body);
    console.log("userInfo: ",userInfo);
    
    if(userInfo.id === req.body.id && userInfo.pw === req.body.pw){
        req.session.user = req.body.id;
        res.redirect("/");
        // res.json({userInfo: userInfo, isSuccess: true});
    } else {
        res.send("로그인 실패");
    }

    req.session.user = userInfo.id;
    console.log(req.session.user);
    
});


app.get("/logout", (req, res) => {
    const user = req.session.user;

    if(user !== undefined){
        req.session.destroy((err) => {
            if(err) res.send("로그인 실패");
            else res.redirect("/");
        });
    } else {
        // 유저가 브라우저에 /logout 접근 (로그인 x)
        res.send("잘못된 접근입니다.");
    }
})



app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
  });