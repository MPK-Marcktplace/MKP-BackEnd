const { userModel } = require('../database');

const partnersController = {
    index: async (request, response) => {
        const partners = await userModel.findAll({
            where: { typeUser: 2 },
          });

        return response.json({ partners });
    },

    show: async (request, response) => {
        const { id } = request.params;
        const partner = await userModel.findByPk(id);

        return response.json({ partner })
    },

    edit: async (request, response) => {
        const { nome, tipo, telefones, ramo, logo } = request.body;
        const { id } = request.params;

       const partner = await userModel.editar(
            { nome, tipo, telefones, ramo, logo },
            { where: { id } }
        );

        return response.json({ partner });
    },
    delete: async (request, response) => {
        const { id } = request.params;

        await userModel.destroy({ where: { id }, force: true });

        response.send();
    }
};

module.exports = partnersController;
