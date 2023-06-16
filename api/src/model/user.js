const dbPool = require('../config/db')
const hash = require('md5')


const getUsers = () => {
    const SQLQuery = `SELECT * FROM users`
    return dbPool.execute(SQLQuery)
}

const getUsername = (username) => {
    const HasilQuery = `SELECT * FROM users WHERE username = '${username}'`
    return dbPool.execute(HasilQuery)
}

const getPassword = (password) => {
   /* const PassQuery*/ 
   const Pass = hash(password)
   const PassQuery = `SELECT * FROM users WHERE password = ${Pass}`
   return dbPool.execute(PassQuery)
}

module.exports = {getUsers,getUsername,getPassword}