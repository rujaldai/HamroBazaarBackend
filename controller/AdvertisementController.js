'use strict';

var bcrypt = require('bcrypt');
var advertisementSchema = require('../entity/AdvertisementSchema');

function addAdvertisement(req, res) {
    var advertisement = req.body;
	advertisementSchema.advertisementSchema.create({
        name: advertisement.name,
        price: advertisement.price,
        image_id: advertisement.imageId,
        product_type: advertisement.productType,
        type: advertisement.type}).then(function(success) {
		if (success) {
            res.status(200);
            res.json({status: 200, message: "Successfully Inserted!"});
		} else {
            console.log("Not Inserted");
            res.status(200);
            res.json({status: 500, message: "Cound not insert advertisement."});
		}
	}).catch(function(err) {
        console.log(err);
        res.status(200);
        res.json({status: 500, message: "Cound not insert advertisement."});
	})
}

function getAdvertisements(req, res) {
    advertisementSchema.advertisementSchema.findAll()
    .then(function(result){
        var allAdvertisements = [];
        result.forEach(element => {
            element.dataValues.productType = element.dataValues.product_type;
            element.dataValues.imageId = element.dataValues.image_id;
            allAdvertisements.push(element.dataValues);
        });
        res.json({status: 200, advertisements: allAdvertisements})

    }, function(err){
        console.log(err);

    });
}

module.exports = {addAdvertisement, getAdvertisements};