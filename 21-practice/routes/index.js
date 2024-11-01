const express = require("express");
const controller = require("../controller/Cmain");
const router = express.Router();

// 기본 주소: localhost:PORT/

router.get("/", controller.main);

router.get("/signup", controller.get_signup);

router.post("/signup", controller.post_signup);

router.get("/signin", controller.get_signin);

router.post("/signin", controller.post_signin);

router.post("/verify", controller.post_verify);

router.get("/profile/:id", controller.get_profile);

router.patch("/profile/:id", controller.edit_profile);

router.delete("/profile/delete", controller.delete_profile);

module.exports = router;