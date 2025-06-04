require("dotenv").config();
const express = require("express");
const app =  express();
const PORT = process.env.PORT;
const connectDB = require("./mongo/db");
const morgan = require('morgan');
const userRouter= require("./routes/userRouter");
const storeRouter = require("./routes/storeRouter");
const productRouter = require("./routes/productRouter");
const categoryRouter = require("./routes/categoryRouter");
const subCategoryRouter = require("./routes/subCategoryRouter")
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use("/",storeRouter)
app.use("/", userRouter);
app.use("/",productRouter);
app.use("/",categoryRouter);
app.use("/",subCategoryRouter);


connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`SERVER IS RUNNING ON PORT http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to the database", err);
  });
