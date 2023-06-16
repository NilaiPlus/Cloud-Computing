const express = require('express');
const ClassController = require('../controller/kelas.js');
const routing = express.Router();

/*GET kelas siswa */
routing.get('/', ClassController.getKelas);

/*GET Kelas ABC Siswa */
routing.get('/:id_Kelas', ClassController.getKelasABC);


module.exports = routing;