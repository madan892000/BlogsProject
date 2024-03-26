const {Router} = require("express");
const controllers = require("./controllers")

const router = Router();

router.get("/" , controllers.getBlogsData)
router.post("/addData" , controllers.addBlogsData)
router.get("/getData/:id" , controllers.getSingleData)
router.delete("/delete/:id" , controllers.deleteBlogsData)
router.put("/updateData/:id" , controllers.updateBlogData)
module.exports = router;