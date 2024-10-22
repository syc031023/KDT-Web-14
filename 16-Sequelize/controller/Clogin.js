const Login = require("../model/Login");

const models = require("../models/index");
const User = models.User;

const get_signup = async (req, res) => {
    // const data = await Login.getSignup();
    const data = await User.findAll();
    res.render("signup", {data});
    console.log(data);
};

const post_signup = async (req, res) => {
    console.log("post_signup ", req.body);
    const {userid, name, userpw} = req.body;
    // const data = await Login.postSignup(userid, name, userpw);
    const data = await User.create({
        userid: userid,
        name: name,
        pw: userpw,
    });
    console.log(data);

    // res.render("signin", {id: data.insertId, userid, name, userpw});
    
    res.json(data); 
    // const link = "../views/signin.ejs"
    // window.location.href(link);
};



const get_signin = async (req, res) => {
    // const data = await Login.getSignin(req.body.userid);
    // res.render("signin", {data});
    // console.log(data);
    res.render("signin");
};

const post_signin = async (req, res) => {
    // res.render(`/profile?id=${req.body.id}`);
    console.log("req.body: ",req.body);

    // const userInfo = await Login.postSignin(req.body.userid, req.body.userpw);    

    const userInfo = await User.findOne({
        where: {
            userid: req.body.userid,
            pw: req.body.userpw,
        },
    });
    
    if(userInfo){
        res.json({isSuccess: true, id: userInfo.id, userid: userInfo.userid});
    } else {
        res.json({isSuccess: false});
    }
};


const get_profile = async (req, res) => {
    console.log(req.query);
    console.log(req.params);
    
    // const result = await Login.getProfile(req.params.id);
    
    const result = await User.findOne({
        where: {
            id: req.params.id,
        },
    });
    
    console.log("get_profile", result);

    if(result)
        res.render("profile", {data: result, message: "조회 완료"});
    else
        res.render("profile", {message: "일치하는 정보 없음"});

    // res.render("profile");
};


const edit_profile = async (req, res) => {
    console.log("edit_profile: ", req.body);
    // const result = await Login.editProfile(req.body);

    const data = await User.update({
        userid: req.body.userid,
        name: req.body.name,
        pw: req.body.userpw,
    }, 
    {
        where: {
            id: req.body.id,
        },
    });

    console.log("edit_profile:", data);

    res.json({result: true});
}

const delete_profile = async (req, res) => {
    // console.log("delete_profile: ", req.body);
    // const result = await Login.deleteProfile(req.body.id);

    const result = await User.destroy({
        where: {
            id: req.body.id,
        }
    });

    console.log({result: true});
    
    res.send("회원 탈퇴 성공");
}

module.exports = {get_signup, post_signup, get_signin, post_signin, get_profile, edit_profile, delete_profile};
