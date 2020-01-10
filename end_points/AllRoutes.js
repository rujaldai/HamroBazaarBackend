module.exports = ( function() {
    'use strict';
    var routes = require("express").Router();
    var userEndPoints = require("./User/UserEndpoints.js");
    var uploadEndPoints = require("./upload/UploadEndpoint");

    routes.use("/user", userEndPoints);
    routes.use("/upload", uploadEndPoints);

    return routes;
})();