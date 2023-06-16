const dbPool = require('../config/db')

const getKelas = () => {
    const ClassQuery = `SELECT * FROM kelas`
    return dbPool.execute(ClassQuery)
}

const getKelasABC = (id_Kelas) => {
    const ClassABCQuery = `SELECT * FROM rombel WHERE id_Kelas=${id_Kelas}`
    return dbPool.execute(ClassABCQuery)
}



module.exports = {getKelas,getKelasABC}