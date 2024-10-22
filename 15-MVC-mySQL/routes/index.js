const express = require("express");
const controller = require("../controller/Cvisitor");
const controller2 = require("../controller/Clogin");
const router = express.Router();

// 기본주소: localhost:PORT/

// GET /
router.get("/", controller.main);

// GET /visitors
router.get("/visitors", controller.get_visitors);

// POST /visitor
router.post("/visitor", controller.post_visitor);

// GET /visitor - 하나 조회
router.get("/visitor", controller.get_visitor);  // req.query

router.get("/visitor/:id", controller.get_visitor); // req.params

// PATCH /visitor
router.patch("/visitor", controller.patch_visitor);

// DELETE /visitor
router.delete("/visitor", controller.delete_visitor);


///////////////////////////
// practice

// GET /signup - 회원가입 페이지
router.get("/signup", controller2.get_signup);

// POST /signup - 회원가입 요청
router.post("/signup", controller2.post_signup);

// GET /signin - 로그인 페이지
router.get("/signin", controller2.get_signin);

// POST /signin - 로그인 요청
router.post("/signin", controller2.post_signin);


// GET /profile - 하나 조회
router.get("/profile/:id", controller2.get_profile);

// PATCH /profile/edit - 프로필 페이지 수정
router.patch("/profile/:id", controller2.edit_profile);

// DELETE /profile/delete - 프로필 페이지 탈퇴
router.delete("/profile/delete", controller2.delete_profile);

module.exports = router;