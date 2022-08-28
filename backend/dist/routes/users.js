"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
const user_js_1 = require("../controller/user.js");
/* GET users listing. */
router.get('/about', (req, res) => {
    res.send("about");
});
router.post('/signup', user_js_1.signupUser);
router.post("/login", user_js_1.loginUser);
router.post("/logout", user_js_1.logoutUser);
router.get("/api", user_js_1.getUsers);
router.get("/api/id", user_js_1.getSingleUser);
router.patch("/api/:id", user_js_1.updateUser);
router.delete("/api/id", user_js_1.deleteUser);
exports.default = router;
