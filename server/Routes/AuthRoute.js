const { Signup,Login,Users,Delete } = require("../Controllers/AuthController");
const {userVerification} = require('../Middleware/AuthMiddleware');
const router = require("express").Router();

router.get('/',userVerification)
router.post("/signup", Signup);
router.post('/login',Login)
router.get('/users',Users)
router.delete('/users/:id',Delete)

module.exports = router;