var dbConfig = require('../databaseConfig/databaseConnection.js');
var sequelize = dbConfig.sequelize;
var Sequelize = dbConfig.Sequelize;


var userSchema = sequelize.define('user',
// attributes
{
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false
	},
	full_name: {
        type: Sequelize.STRING(50),
		allowNull: false
    },
    email: {
        type: Sequelize.STRING(60),
		allowNull: false
    },
    password: {
        type: Sequelize.STRING(255),
		allowNull: false
	},
	phone: {
		type: Sequelize.STRING(10)
    },
    mobile_phone: {
        type: Sequelize.STRING(14),
		allowNull: false
    },
    address1: {
        type: Sequelize.STRING(60),
		allowNull: false
    },
    address2: {
		type: Sequelize.STRING(60)
    },
    address3: {
		type: Sequelize.STRING(60)
    },
    image: {
		type: Sequelize.STRING
	}    		
}, {
	//Options
	paranoid: true,
	freezeTableName: false,
	tableName: 'users'
});

userSchema.sync({ /* stop forcing updating table */ force: false})
.then(function(result){
	console.log("inside userschema sync:: " + result);
})
.catch(function(err) {
	console.log(err);
});

module.exports = {userSchema};
