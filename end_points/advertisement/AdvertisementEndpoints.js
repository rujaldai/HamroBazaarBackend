module.exports = (function() {
    var routes = require("express").Router();
    var advertisementController = require("../../controller/AdvertisementController");
    var authController = require("../../controller/AuthController");

routes.post('/add', advertisementController.addAdvertisement );

routes.get('/get', advertisementController.getAdvertisements);


return routes;
})();