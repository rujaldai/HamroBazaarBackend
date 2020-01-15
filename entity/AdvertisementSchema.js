var dbConfig = require('../databaseConfig/databaseConnection.js');
var sequelize = dbConfig.sequelize;
var Sequelize = dbConfig.Sequelize;


var advertisementSchema = sequelize.define('advertisement',
// attributes
{
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false
	},
	name: {
        type: Sequelize.STRING(50),
		allowNull: false
    },
    price: {
        type: Sequelize.FLOAT(10, 4),
		allowNull: false
    },
    image_id: {
        type: Sequelize.STRING(255),
		allowNull: false
	},
	product_type: {
        type: Sequelize.STRING(10),
        allowNull: false
    },
    type: {
        type: Sequelize.STRING(14),
		allowNull: false
    }    		
}, {
	//Options
	paranoid: true,
	freezeTableName: false,
	tableName: 'advertisements'
});

advertisementSchema.sync({ /* stop forcing updating table */ force: false})
.then(function(result){
	console.log("inside advertisement schema sync:: " + result);
})
.catch(function(err) {
	console.log(err);
});

module.exports = {advertisementSchema};
