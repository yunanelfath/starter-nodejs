const redis = {
	host: process.env.REDIS_HOST,
	port: process.env.REDIS_HOST
}

const mongodb = {
	host: process.env.MONGO_HOST,
	port: process.env.MONGO_PORT,
	dbName: process.env.MONGO_DB,
	username: process.env.MONGO_USERNAME,
	password: process.env.MONGO_PASSWORD
}

module.exports = {
	mongodb,
	redis
}
