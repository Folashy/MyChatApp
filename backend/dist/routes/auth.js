"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
const userController_1 = require("../controller/userController");
/* GET home page. */
router.post('/register', userController_1.signupUser);
router.post('/login', userController_1.loginUser);
// styts
exports.default = router;
