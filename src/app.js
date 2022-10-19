const express = require("express");
const path = require("path");
const cors = require("cors");

const authRouter = require("./routes/authRouter.routes")
const cepRouter = require("./routes/cepRouter.routes")
const departmentRouter = require("./routes/departmentRouter.routes")
const productsRouter = require("./routes/productsRouter.routes");
const partnersRouter = require("./routes/partnersRouter.routes");
const userRouter = require("./routes/usersRouter.routes");

const app = express();
app.use(cors());

app.use(express.static(path.join(__dirname, "..", "public")));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/cep", cepRouter)
app.use("/departments", departmentRouter)
app.use("/products", productsRouter); 
app.use("/partners", partnersRouter);
app.use("/users", userRouter)
app.use("/auth", authRouter);

app.listen(3033,() => {console.log("Server start")});