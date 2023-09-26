exports.getAllclasses = (req, res, next) => {
    console.log(req.query.id);
    res.status(200).json([
      { id: 1, name: "2/G" },
      { id: 2, name: "2/D" },
    ]);
  };
  
  exports.getClassById = (req, res, next) => {
    console.log(req.params);
    res.status(200).json({ id: req.params.id });
  };
  
  exports.addClass = (req, res, next) => {
    res.status(201).json({ message: "added" });
  };
  
  
  exports.updateClass=(req,res,next)=>{
      res.status(200).json({message:"updated"});
      }
  
  exports.deleteClass=(req,res,next)=>{
      res.status(200).json({message:"deleted"});
      }
  
  
  exports.getClassChildrenInfo=(req,res,next)=>{
      res.json({message:"Class children Info"});
  }
  exports.getClassSupervisorInfo=(req,res,next)=>{
    res.json({message:"Class supervisor Info"});
}