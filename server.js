const express = require("express");
const { default: mongoose } = require("mongoose");
require("dotenv").config();
const workoutRoutes = require("./routes/workoutRoutes");

//express application
const app = express();

const PORT = process.env.PORT;

//middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});
app.use(express.json());


//routes
app.use("/api/v1/workout", workoutRoutes);
//connect to db
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
        console.log(`listening at port ${PORT}`);
      })
    console.log("successfully connected to the database")})
  .catch((e) => {
    console.log(e);
  });




