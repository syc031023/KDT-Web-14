const express = require("express");
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



app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});