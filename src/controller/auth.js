const UsersModel = require('../model/user')

const login = async (req,res) => {
    try{
        const {username,password} = req.body;
        const data = await UsersModel.getUsername(username)
        const pass = await UsersModel.getPassword(password)
       return res.json({
        message: "GET User",
        data: {data,pass}
        }
     );
   } catch(error){
        res.status(500).json({
            message: "Server Error",
            serverMessage: error
        })
    };
}






module.exports = {login}
