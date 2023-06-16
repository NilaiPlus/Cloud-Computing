const dbPool = require('../config/db')

const getNilaisiswa = () => {
    const SQLQuery = `SELECT * FROM nilai_siswa ORDER BY id_nilai_siswa`
    return dbPool.execute(SQLQuery)
}

const getHasilSiswa = (id_Siswa) => {
    const HasilQuery = `SELECT * FROM nilai_siswa WHERE id_siswa=${id_Siswa}`
    return dbPool.execute(HasilQuery)
}

module.exports = {getNilaisiswa,getHasilSiswa}