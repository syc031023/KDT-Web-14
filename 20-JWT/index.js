const express = require("express");
const jwt = require("jsonwebtoken");
const { name } = require("../16-sequelize2/routes");
const app = express();
const PORT = 8000;
const SECRET = "9sdkfhAFkjshfdjSDFShjfskdfksjhjhV"; // 노출되지 않게 하기 위해 env 파일에 저장


const userInfo = {id: "banana", pw: "1234", name: "홍길동", age: 20};

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/login", (req, res) => {
    res.render("login");
});

app.post("/login", (req, res) => {
    try {
        const {id, pw} = req.body;
        const {id: uId, pw: uPw} = userInfo;

        if(id === uId && pw === uPw){
            // 토큰 생성
            const token = jwt.sign({id}, SECRET);
            res.json({result: true, token});
            console.log(token);
        } else {
            res.json({result: false, message: "로그인 정보가 올바르지 않습니다,"})
        }
        
    } catch (err) {
        console.log(err);
    }
});

app.post("/verify", (req, res) => {
    if (req.headers.authorization) {
        const headers = req.headers.authorization;
        console.log(headers);
        const [bearer, token] = headers.split(" "); // ['Bearer', 'token']

        try {
            const result = jwt.verify(token, SECRET);
            console.log(result); // { id: 'banana', iat: 1730079111 }

            if(result.id === userInfo.id){
                res.json({result: true, name: userInfo.name});
            } else {
                return res.status(403).json({result: false, message: "검증 실패"});
            }
        } catch (error) {
            console.log(error);
            return res.status(403).json({result: false, message: "검증 실패"});
        }
    } else {
        res.redirect("/login");
    }
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});