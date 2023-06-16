const express = require('express');
const UsersController = require('../controller/siswa.js');
const routing = express.Router();

/*GET nilai siswa */
routing.get('/', UsersController.getNilaisiswa);

/*routing.post('/',UsersController.loginsiswa);*/

routing.get('/:id_Siswa',UsersController.getHasilSiswa);

/**/
routing.get('/coba', UsersController.getCoba);

module.exports = routing;