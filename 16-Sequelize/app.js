const express = require("express");
const db = require("./models/index");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/static', express.static(__dirname + '/static'));



const indexRouter = require("./routes");
app.use("/", indexRouter);

app.get("/register", (req, res) => {
    res.render("register");
})

app.get("*", (req, res) => {
    res.render("404");
});

db.sequelize.sync({force: false}).then(() => {
    // force: false -> table이 없으면 생성
    // force: true -> table 무조건 생성 (만약 테이블이 있다면 다 삭제하고 다시 생성 -> prod에서 사용 x)

    app.listen(PORT, () => {
        console.log(`http://localhost:${PORT}`);
    });
});
