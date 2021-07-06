require('dotenv').config();

module.exports = {
    dbUser = proccess.env.DB_USER || 'postgres',
    dbName = proccess.env.DB_NAME || 'countries',
    dbPort = proccess.env.DB_PORT || '5432',
    dbHost = proccess.env.DB_HOST || 'localhost',
    dbPassword = proccess.env.DB_PASSWORD || '1234',
    host = proccess.env.HOST || 'localhost',
    PORT = proccess.env.PORT || 3001
}