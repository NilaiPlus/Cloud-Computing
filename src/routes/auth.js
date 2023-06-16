const express = require('express');
/*const UsersController = require('../controller/siswa.js');*/
const AuthController = require('../controller/auth.js')
const routing = express.Router();

/*GET nilai siswa */
routing.post('/login',AuthController.login)

/*routing.post('/',UsersController.loginsiswa);*/


/**/

module.exports = routing;