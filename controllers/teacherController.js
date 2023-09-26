exports.getAllteachers = (req, res, next) => {
  console.log(req.query.id);
  res.status(200).json([
    { id: 1, name: "shadwa" },
    { id: 2, name: "yara" },
  ]);
};

exports.getTeacherById = (req, res, next) => {
  console.log(req.params);
  res.status(200).json({ id: req.params.id });
};

exports.addTeacher = (req, res, next) => {
  res.status(201).json({ message: "added" });
};


exports.updateTeacher=(req,res,next)=>{
    res.status(200).json({message:"updated"});
    }

exports.deleteTeacher=(req,res,next)=>{
    res.status(200).json({message:"deleted"});
    }


exports.getTeacherSupervise=(req,res,next)=>{
    res.json({message:"supervise"});
}