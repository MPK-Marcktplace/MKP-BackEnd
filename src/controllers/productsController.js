const { urlencoded } = require("express");
const { productModel } = require("../database");

const productsController = {

    index: async (request, response) => {
        const products = await productModel.findAll(); 

        response.json({products});
    },

    show: async (request, response) => {
        const {idProducts} = request.params;
        const product = await productModel.findAll({
            where: { id: idProducts },
        });

        response.json({product});
    },

    add: async (request, response) => {
        const newProduct = { 
            ...request.body
        };        
        
        const product = await productModel.create(newProduct);
        response.json({product});
    },
}

module.exports = productsController;