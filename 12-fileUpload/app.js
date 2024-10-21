const express = require("express");
const app = express();
const PORT = 8000;

// multer 관련 설정
const multer = require("multer");
const path = require("path"); // 경로에 관한 내장 모듈
const upload = multer({
    dest: "uploads/", // dest: 클라이언트가 업로드한 파일을 저장할 서버측 경로
});
// multer 세부 설정
const uploadDetail = multer({
    // storage: 저장할 공간에 대한 정보
    storage: multer.diskStorage({
        // destination: 경로 설정
        destination(req, file, done){
            // done: callback 함수
            // done(null, "~~"); 여기서 null은 error를 의미하는 매개변수
            // 에러가 없으므로 "null" 이라고 전달하여 콜백함수 호출
            done(null, "uploads/");
        },
        filename(req, file, done){
            const ext = path.extname(file.originalname); // 파일의 "확장자"를 추출
            console.log("ext: ", ext);
            console.log(file.originalname);
            done(null, path.basename(file.originalname, ext) + Date.now() + ext);
        },
        // limits: 파일 제한 정보
        limits: {fileSize: 5*1024*1024},
    }),
});

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use("/uploads", express.static(__dirname + "/uploads"));

app.get("/", (req, res) => {
    res.render("index");
});

// 1. single(): 하나의 파일 업로드
// upload.single("userfile") : ("파일의 name")
// 클라이언트의 요청이 들어오면 multer 설정(upload 변수)에 따라 파일 업로드 한 후
// req.file 객체 생성
// app.post("/upload", upload.single("userfile"), (req, res) => {
    // req.file: 파일 업로드 정보
    // req.body: 파일 외의 정보들 
app.post("/upload", uploadDetail.single("userfile"), (req, res) => {
    console.log(req.file);
    console.log(req.body);
                          
    res.send("파일 업로드 완료");
});

/*
    {
        fieldname: 'userfile',  // 폼에 정의한 name값
        originalname: 'á\x84\x89á\x85³á\x84\x8Fá\x85³á\x84\x85á\x85µá\x86«á\x84\x89á\x85£á\x86º 2024-10-08 á\x84\x8Bá\x85©á\x84\x8Cá\x85¥á\x86« 11.54.10.png', // 원본 파일명
        encoding: '7bit', // 파일 인코딩 타입
        mimetype: 'image/png', // 파일 타입
        destination: 'uploads/', // 파일 저장 경로
        filename: '93e7c2a0e0946f1e4926954e61fadad8', // destination에 저장된 파일명
        path: 'uploads/93e7c2a0e0946f1e4926954e61fadad8', // 엽로드된 파일 전체 경로
        size: 465817 // 파일 크기
    }
*/

// 2. array(): 여러 파일 한번에 업로드
// uploadDetail.array("userfiles")
// 파일을 업로드한 후, req.files 객체 생성
app.post("/upload/array", uploadDetail.array("userfiles"), (req, res) => {
    console.log(req.files); // [{파일1 정보}, {파일2 정보}, ...]
    console.log(req.body);
    res.send("하나의 인풋에 여러 파일 업로드 완료");    
});

// 3. fiels(): 여러 파일을 각각의 인풋에 업로드
// req.files에서 파일 정보를 확인
app.post("/upload/fields", uploadDetail.fields([{name: "userfile1"}, {name: "userfile2"}]), (req, res) => {
    console.log(req.files); // {userfile1: [{파일정보}], userfile2: [{...}]}
    console.log(req.body);
    res.send("여러 인풋에 각각의 파일 업로드 완료")
});

// 동적 폼 전송
app.post("/dynamicFile", uploadDetail.single("dynamicUserFile"), (req, res) => {
    console.log(req.file);
    res.send(req.file);
});

// Practice

const uploadPractice = multer({
    storage: multer.diskStorage({
        destination(req, file, done){
            done(null, "uploads/");
        },
        filename(req, file, done) { // userid의 정보 필요
            const ext = path.extname(file.originalname);
            console.log("file name > req.body ", req.body);
            
            done(null, req.body.id + ext);
        },
        limits: {fileSize: 5*1024*1024},
    }),
});

app.get("/practice", (req, res) => {
    res.render("practice");
});

app.post("/uploads/practice", uploadPractice.single("profileImg"), (req, res) => {
    console.log(req.file);
    console.log(req.body);
    res.render("result", {user: req.body, profile: req.file.path});
});


app.listen(PORT, () => {
    console.log(`port is opening on ${PORT}`);
});