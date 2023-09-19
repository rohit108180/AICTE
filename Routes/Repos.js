var express = require("express");
var router = express.Router();
var repos = require("../Controler/Repos");

router.route("/add").post(repos.Add);
router.route("/view").get(repos.View);
router.route("/view/all").get(repos.ViewAll);
router.route("/:id").get(repos.ViewOne).delete(repos.delete).put(repos.update);

module.exports = router;
