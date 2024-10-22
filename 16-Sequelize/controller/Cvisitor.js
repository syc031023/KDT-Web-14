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
    // const data = await Visitor.getVisitors();
    const data = await Visitor.findAll(); // [{}, {}, ...]
    res.render("visitor", {data});
    console.log(data);
};

const post_visitor = async (req, res) => {
    console.log(req.body);
    const {name, comment} = req.body;
    // const data = await Visitor.postVisitor(name, comment);
    // INSERT INTO visitor (name, comment) values (?, ?)
    const data = await Visitor.create({
        name: name,
        comment: comment
    });
    console.log(data); // { id: 3, name: '송영채', comment: '안녕' }
    // res.json(data);
    res.send("수정 성공!");
};

// GET /visitor or /visitor/:id
const get_visitor = async (req, res) => {
    console.log(req.query);
    console.log(req.params);
    
    // const data = await Visitor.getVisitor(req.query.id); // req.query일 때
    // const data = await Visitor.getVisitor(req.params.id); // req.params일 때

    // SELECT * FROM visitor WHERE id= ? limit 1
    const data = await Visitor.findOne({where: {id: req.params.id}});
    res.json(data);
};

const patch_visitor = async (req, res) => {
    console.log(req.body);
    
    // const data = await Visitor.patchVisitor(req.body);

    // UPDATE visitor SET name = ?, comment = ? WHERE id = ?
    const data = await Visitor.update({
        name: req.body.name,
        comment: req.body.comment,
    },{
        where: {
            id: req.body.id
        }
    });
    // res.send("수정 성공!");
    console.log("update: ", data);
    
    res.json({result: true});
}

// DELETE /visitor
const delete_visitor = async (req, res) => {
    console.log(req.body);
    
    // const data = await Visitor.deleteVisitor(req.body.id);

    const data = await Visitor.destroy({
        where: {
            id: req.body.id,
        }
    });
    console.log("destroy: ", data);
    res.json({result: true});
};

module.exports = {main, get_visitors, post_visitor, get_visitor, patch_visitor, delete_visitor};