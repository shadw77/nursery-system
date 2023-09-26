exports.getAllchildren = (req, res, next) => {
    console.log(req.query.id);
    res.status(200).json([
      { id: 1, name: "Donia" },
      { id: 2, name: "Dina" },
    ]);
  };
  
  exports.getChildById = (req, res, next) => {
    console.log(req.params);
    res.status(200).json({ id: req.params.id });
  };
  
  exports.addChild = (req, res, next) => {
    res.status(201).json({ message: "added" });
  };
  
  
  exports.updateChild=(req,res,next)=>{
      res.status(200).json({message:"updated"});
      }
  
  exports.deleteChild=(req,res,next)=>{
      res.status(200).json({message:"deleted"});
      }
  
  
  exports.getChildClassInfo=(req,res,next)=>{
      res.json({message:"Child Class Info"});
  }