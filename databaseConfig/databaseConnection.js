const Sequelize = require('sequelize'); //ORM

const sequelize = new Sequelize('hamrobazaar', 'root', 'rujal', {
	host: 'localhost',
	dialect: 'mysql',
	logging: false,
	define: {
		timestamps: true
	}
});

// console.log(sequelize.authenticate());
sequelize
.authenticate()
.then(() => {
	console.log("connection established");
})
.catch(err => {
	console.error("Inside Catch ",  err);
});

module.exports = {
	Sequelize, sequelize
}