const { Router } = require("express");

const partnersController = require('../controllers/partnersController');

const partnersRouter = Router ();

partnersRouter.get("/", partnersController.index);
partnersRouter.get("/:id", partnersController.show);
partnersRouter.put("/:id", partnersController.edit);
partnersRouter.delete("/:id", partnersController.delete);

module.exports = partnersRouter;