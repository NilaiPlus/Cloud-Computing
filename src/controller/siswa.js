const UsersModel = require('../model/siswa')

const getNilaisiswa = async (req,res) => {
    try{
        const [data] = await UsersModel.getNilaisiswa()
        res.json({
        message: "GET All Users",
        data: data
        }
     );
   } catch(error){
        res.status(500).json({
            message: "Server Error",
            serverMessage: error
        })
    };
}

const getHasilSiswa = async (req, res) => {
    const { id_Siswa } = req.params
    try {
        const result = await UsersModel.getHasilSiswa(id_Siswa);
        return res.json({
            message: `GET Users by id ${id_Siswa}`,
            data: result[0][0]
        })
    } catch(error) {
        throw error;
    }
}

const getCoba = (req,res) => {
    res.json({
        data: true,
    })
}


module.exports = {getNilaisiswa,getHasilSiswa,getCoba}
