const express= require("express");
const controller = require("./../controllers/classController")
const router = express.Router()


router.route("/class")
       .get(controller.getAllclasses)
       .post(controller.addClass)
       .put(controller.updateClass)
       .delete(controller.deleteClass)

router.route("/class/:id")
       .get(controller.getClassById)



router.route("/class/child/:id")
       .get(controller.getClassChildrenInfo)

router.route("/class/teacher/:id")
       .get(controller.getClassSupervisorInfo)


module.exports = router;       