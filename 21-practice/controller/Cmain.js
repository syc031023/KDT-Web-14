const models = require("../models/index");
const User = models.User;
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");
const SECRET = "asdflskjq39rwofsdjnHksdOksOOOSJDNFksjdf";

const bcryptPassword = (password) => {
    return bcrypt.hashSync(password, saltRounds);
};

const comparePassword = (password, hashedPw) => {
    return bcrypt.compareSync(password, hashedPw);
};

const main = (req, res) => {
    res.render("index");
};

const get_signup = async (req, res) => {
    // const data = await User.findAll();
    // res.render("signup", {data});
    // console.log("get_signup: ", data);
    res.render("signup");
};

const post_signup = async (req, res) => {
    console.log("req.body: ", req.body);
    const {userid, pw, name} = req.body;
    const data = await User.create({
        pw: bcryptPassword(pw), 
        name: name, 
        userid: userid,
    });
    console.log("post_signup: ", data);
    res.json(data);
};

const get_signin = async (req, res) => {
    res.render("signin");
};

const post_signin = async (req, res) => {
    console.log("req.body: ", req.body);
    const data = await User.findOne({
        where: {
            userid: req.body.userid,
        }
    });

    console.log("data: ", data.pw);
    console.log("req.body.pw: ", req.body.pw);

    const isMatch = comparePassword(req.body.pw, data.pw);
    console.log(isMatch);
    
    if(isMatch){
        const token = jwt.sign(data.userid, SECRET);
        res.json({isSuccess: true, id: data.id, userid: data.userid, token});
    } else {
        res.json({isSuccess: false});
    }
};

const post_verify = async (req, res) => {
    if (req.headers.authorization) {
        const headers = req.headers.authorization;
        console.log(headers);
        const [bearer, token] = headers.split(" "); // ['Bearer', 'token']

        try {
            const result = jwt.verify(token, SECRET);
            console.log("result: ", result); // { id: 'banana', iat: 1730079111 }

            const data = await User.findOne({
                where: {
                    userid: result.userid
                },
            });

            if(data){
                res.json({result: true, name: data.name});
            } else {
                return res.status(403).json({result: false, message: "검증 실패"});
            }
        } catch (error) {
            console.log(error);
            return res.status(403).json({result: false, message: "검증 실패"});
        }
    } else {
        res.redirect("/signin");
    }
}


const get_profile = async (req, res) => {
    const data = await User.findOne({
        where: {
            id: req.params.id,
        },
    });

    if(data){
        res.render("profile", {data: data, message: "조회완료"});
    } else {
        res.render("profile", {message: "일치하는 정보가 없습니다."});
    }
};

const edit_profile = async (req, res) => {
    const data = await User.update({
        userid: req.body.userid,
        pw: bcryptPassword(req.body.pw),
        name: req.body.name,
    }, 
    {
        where: {
            id: req.body.id,
        },
    });

    res.json({result: true});
};

const delete_profile = async (req, res) => {
    const data = await User.destroy({
        where: {
            id: req.body.id,
        }
    });

    res.send("회원 탈퇴 성공");
};
module.exports = {main, get_signup, post_signup, get_signin, post_signin, get_profile, edit_profile, delete_profile, post_verify};