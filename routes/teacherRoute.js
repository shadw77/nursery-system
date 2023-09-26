const express= require("express");
const controller = require("./../controllers/teacherController")
const router = express.Router()


router.route("/teacher")
       .get(controller.getAllteachers)
       .post(controller.addTeacher)
       .put(controller.updateTeacher)
       .delete(controller.deleteTeacher)

router.route("/teacher/:id")
       .get(controller.getTeacherById)

router.route("/teacher/supervise")
       .get(controller.getTeacherSupervise)

module.exports = router;       