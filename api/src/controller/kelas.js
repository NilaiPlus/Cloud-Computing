const UsersModel = require('../model/kelas')

const getKelas = async (req,res) => {
    try{
        const [data] = await UsersModel.getKelas()
        res.json({
        message: "GET All Kelas",
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

const getKelasABC = async (req,res) => {
    const {id_Kelas} = req.params

    try{
        const data = await UsersModel.getKelasABC(id_Kelas)    
        return res.json({
            message: `GET Users by id ${id_Kelas}`,
            data: data[0][0]
        })
   } catch(error){
        res.status(500).json({
            message: "Server Error",
            serverMessage: error
        })
    };
}



module.exports = {getKelas,getKelasABC}
