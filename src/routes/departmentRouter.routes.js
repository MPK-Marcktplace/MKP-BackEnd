const { Router } = require("express");

const departmentsController = require('../controllers/departmentsController');

const departmentRouter = Router();

departmentRouter.get("/", departmentsController.index);
departmentRouter.get("/:id", departmentsController.show);
departmentRouter.post("/", departmentsController.add);
departmentRouter.put("/", departmentsController.update);
departmentRouter.delete("/:id", departmentsController.delete);

module.exports = departmentRouter;