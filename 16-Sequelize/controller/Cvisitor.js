// models/index를 불러와서 export한 db 객체
const models = require("../models/index");
// const Visitor = require("../model/Visitor");
const Visitor = models.Visitor;

// GET
const main = (req, res) => {
    res.render("index");
};

// GET /visitors
const get_visitors = async (req, res) => {
    // 모델에서 데이터 받아오기

    // 컨트롤러 -> 모델 -> DB -> 모델 -> 컨트롤러 -> 응답
    // 비동기 처리가 필요
    // 모델에서 호출한 함수를 DB에서 받아올 때까지 기다려야 함
    const data = await Visitor.getVisitors();
    res.render("visitor", {data});
    console.log(data);
};

const post_visitor = async (req, res) => {
    console.log(req.body);
    const {name, comment} = req.body;
    const data = await Visitor.postVisitor(name, comment);
    console.log(data);
    res.json({id: data.insertId, name, comment});
};

// GET /visitor or /visitor/:id
const get_visitor = async (req, res) => {
    console.log(req.query);
    console.log(req.params);
    
    // const data = await Visitor.getVisitor(req.query.id); // req.query일 때
    const data = await Visitor.getVisitor(req.params.id); // req.params일 때
    res.json(data[0]);
};

const patch_visitor = async (req, res) => {
    console.log(req.body);
    
    const data = await Visitor.patchVisitor(req.body);
    // res.send("수정 성공!");
    res.json({result: true});
}

// DELETE /visitor
const delete_visitor = async (req, res) => {
    console.log(req.body);
    
    const data = await Visitor.deleteVisitor(req.body.id);
    console.log(data);
    res.json({result: true});
};

module.exports = {main, get_visitors, post_visitor, get_visitor, patch_visitor, delete_visitor};