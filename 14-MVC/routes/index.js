// Router 객체
const express = require("express");
const controller = require("../controller/Cmain");
const router = express.Router();

// localhost:PORT/ <- 기본 경로

// [Before]
// router.get("/", (req, res) => {
//   res.render("index");
// });

// [After]
// 1 => controller 사용으로 변경
// 경로를 controller와 연결지어 사용 가능
router.get("/", controller.main);
router.get("/comments", controller.comments);
router.get("/comment/:id", controller.comment); 

// GET /comment/:id
// 라우터 주소에 매개변수 기능 존재함
// (참고) 와일드카드 역할을 하기 때문에 일반 라우터보다 뒤에 위치해야 함 - 일반 라우터를 방해하지 않음
// req.query vs req.params (:id는 params)
// req.query: 쿼리 스트링 (?key=value&key=value)


router.get("/login", controller.login);
router.post("/login-result", controller.loginResult);


// module.exports를 통해서 router 등록을 해줘야 다른 모듈에서 사용 가능
module.exports = router;

