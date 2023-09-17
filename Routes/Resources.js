const router = require("express").Router();
const resources = require("../Controler/Resources");

router.get("/", resources.get);
router.post("/", resources.post)

module.exports = router;