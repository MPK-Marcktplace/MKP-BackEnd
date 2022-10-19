const { departmentModel } = require('../database');

const departmentsController = {
    index: async (request, response) => {
        const departments = await departmentModel.findAll();
        return response.json({ departments });
    },

    show: async (request, response) => {
        const { id } = request.params;
        const department = await departmentModel.findByPk(id);
            ;
        return response.json({ department });
    },

    add: async (request, response) => {
        const { name } = request.body;
        const department = await departmentModel.create({ name });

        return response.json(department);
    },

    update: async (request, response) => {
        const { name, id } = request.body;
        const department = await departmentModel.update({ name: name }, {
            where: { id }
        });

        response.json({ department });
    },

    delete: async (request, response) => {
        const { id } = request.body;
        const department = await departmentModel.destroy({
            where: { id:id }
          });

        response.json({ department });
    }
};

module.exports = departmentsController;
