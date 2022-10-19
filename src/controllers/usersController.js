const fs = require('fs');
const { v4: uuid } = require('uuid');
const bcrypt = require('bcryptjs');
const { userModel } = require('../database');

const usersController = {
    add: async  (request, response) => {
        const { password } = request.body;

        const passwordHash = bcrypt.hashSync(password);

        const newUser = {
            ...request.body,
            password: passwordHash
        }

        
        const user = await userModel.create(newUser);
            return response.json({ user });
    }
}

module.exports = usersController;