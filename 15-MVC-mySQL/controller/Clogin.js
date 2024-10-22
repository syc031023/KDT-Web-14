const Login = require("../model/Login");

const get_signup = async (req, res) => {
    const data = await Login.getSignup();
    res.render("signup", {data});
    console.log(data);
};

const post_signup = async (req, res) => {
    console.log(req.body);
    const {userid, name, userpw} = req.body;
    const data = await Login.postSignup(userid, name, userpw);
    console.log(data);

    // res.render("signin", {id: data.insertId, userid, name, userpw});
    
    res.json({id: data.insertId, userid, name, userpw}); 
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

    const userInfo = await Login.postSignin(req.body.userid, req.body.userpw);    
    
    if(userInfo[0]){
        res.json({isSuccess: true, id: userInfo[0].id, userid: userInfo[0].userid});
    } else {
        res.json({isSuccess: false});
    }
};


const get_profile = async (req, res) => {
    console.log(req.query);
    console.log(req.params);
    
    const result = await Login.getProfile(req.params.id);
    console.log("get_profile", result);

    if(result.length > 0)
        res.render("profile", {data: result[0], message: "조회 완료"});
    else
        res.render("profile", {message: "일치하는 정보 없음"});

    // res.render("profile");
};


const edit_profile = async (req, res) => {
    console.log("edit_profile: ", req.body);
    const result = await Login.editProfile(req.body);
    res.json({result: true});
}

const delete_profile = async (req, res) => {
    console.log("delete_profile: ", req.body);
    const result = await Login.deleteProfile(req.body.id);
    res.send("회원 탈퇴 성공");
}

module.exports = {get_signup, post_signup, get_signin, post_signin, get_profile, edit_profile, delete_profile};
