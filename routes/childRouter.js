const express= require("express");
const controller = require("./../controllers/childController")
const router = express.Router()


router.route("/child")
       .get(controller.getAllchildren)
       .post(controller.addChild)
       .put(controller.updateChild)
       .delete(controller.deleteChild)

router.route("/child/:id")
       .get(controller.getChildById)



router.route("/child/class/:id")
       .get(controller.getChildClassInfo)


module.exports = router;       