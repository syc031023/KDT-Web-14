const express = require('express');
const app = express(); //express 객체 생성
const PORT = 8000;

app.set("view engine", "ejs");
app.set("views", "./views");

// body-parser
app.use(express.urlencoded({extended: true}));
app.use(express.json()); // json 형태로 사용하고 받겠다


app.get("/", (req, res) => {
    res.render("index");
})

// Practice 1
app.get("/practice1", (req, res) => {
    res.render("practice1");
});

app.get("/practice1-get", (req, res) => {
    console.log(req.query);
    res.json(req.query);
});



// Practice 2

const loginInfo = {
    userid: "syc031023",
    userpw: "1234",
};

app.get("/practice2", (req, res) => {
    res.render("practice2");
});

app.post("/practice2-post", (req, res) => {
    console.log(req.body);
    console.log(loginInfo);
    
    if(loginInfo.userid === req.body.id && loginInfo.userpw === req.body.pw){
        res.json({loginInfo: req.body, isSuccess: true});
    } else {
        res.json({isSuccess: false});
    }
});

//////////////////////////////////////////////

app.get("/login", (req, res) => {
    res.send(req.body);
})

// ajax get
app.get("/ajax", (req, res) => {
    console.log(req.query);
    res.send(req.query);
})

// ajax post
app.post("/ajax", (req, res) => {
    console.log(req.body);
    res.send(req.body);
})

// axios get
app.get("/axios", (req, res) => {
    console.log(req.query);
    // res.send(req.query);
    res.json(req.query)
})

app.post("/axios", (req, res) => {
    console.log(req.body);
    res.send(req.body);
})

app.get("/fetch", (req, res) => {
    console.log(req.query);
    res.json(req.query);
    
})

app.post("/fetch", (req, res) => {
    console.log(req.body);
    res.json(req.body);
    
})

app.listen(PORT, () => {
    console.log(`port is opening on ${PORT}`);
});

