module.exports = (function() {
var routes = require("express").Router();
var upload = require("../../controller/UploadController");
routes.post("/", upload.single('imageFile'), (req, res) => {
    console.log(req.file);
    console.log(res.file);    
    res.status(200);
    res.json(req.file);
        
    });

return routes;
})();