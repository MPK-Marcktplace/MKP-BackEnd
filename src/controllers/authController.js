const bcrypt = require("bcryptjs");
const { userModel } = require("../database");

const authController = {

    login: async (request, response) => {
       
        const { email, password } = request.body;
        const userFound = await userModel.findOne({ where: {email}});

            if (!userFound){
                return response.status(401).json({error: "usuario ou senha incorretos"});
            } 
            
            const passwordFound = bcrypt.compareSync(password, userFound.password);

            if (!passwordFound){
                return response.status(401).redirect("/");
            }

            const name = userFound.name;
            return response.json(name);
 
    },
};

module.exports = authController;
