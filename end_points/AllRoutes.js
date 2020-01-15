module.exports = ( function() {
    'use strict';
    var routes = require("express").Router();
    var userEndPoints = require("./User/UserEndpoints.js");
    var uploadEndPoints = require("./upload/UploadEndpoint");
    var advertisementEndpoint = require("./advertisement/AdvertisementEndpoints");

    routes.use("/user", userEndPoints);
    routes.use("/upload", uploadEndPoints);
    routes.use("/advertisement", advertisementEndpoint);

    return routes;
})();