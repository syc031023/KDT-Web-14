// Router에 대한 실질적인 처리

const Comment = require("../model/comment");
const LoginInfo = require("../model/login");
const Users = require("../model/Users");

const main = (req, res) => {
  res.render("index");
};

const comments = (req, res) => {
  console.log(Comment.commentInfos());
  res.render("comments", {commentInfos: Comment.commentInfos()});
  
};

const comment = (req, res) => {
  console.log(req.params); // 라우트 매개변수에 대한 정보가 담겨 있음
  console.log(req.params.id); // id 고유 값
  
  const comments = Comment.commentInfos(); // 댓글 목록에 대한 배열
  const commentId = req.params.id;
  console.log(comments[commentId - 1]);
  
  // 존재하지 않는 댓글 id 접근 시
  if(commentId < 1 || commentId > comments.length){
    return res.render("404");
  }

  // :id 변수에 숫자가 아닌 값이 오는 경우
  if(isNaN(commentId)){
    return res.render("404");
  }

  res.render("comment", {commentInfo: comments[commentId - 1]});
};

const login = (req, res) => {
    res.render("login");
}

const loginResult = (req, res) => {
    console.log(req.body);
    
    const userInfo = LoginInfo.loginInfo;

    console.log(userInfo);

    // const users = Users.users.split("\n");
    // console.log(users);
    
    // for(let i=0; i<users.length; i++){
    //     const userInfos = users.split("//");
    //     if(userInfos[0] === req.body.id && userInfos[1] === req.body.pw){
    //         res.json({userInfo: req.body, isSuccess: true});
    //     } else {
    //         res.json({isSuccess: false});
    //     }
    // }

    if(userInfo.userid === req.body.id && userInfo.userpw === req.body.pw){
        res.json({userInfo: req.body, isSuccess: true});
    } else {
        res.json({isSuccess: false});
    }
};

module.exports = {main, comments, comment, login, loginResult};