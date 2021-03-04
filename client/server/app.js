const express = require("express");
const app = express();
const cors = require("cors");

const indexRouter = require("./routes/index");
const userRouter = require("./routes/user");

app.use(cors());
app.use(indexRouter);
app.use("/user", userRouter);

const port = process.env.PORT || 3002;

app.listen(port, () => console.log(`listening on port ${port}`));
