const express = require("express");
const app = express();

//Import Routes.
const cityRoutes = require("./routes/city");
const coordinatesRoutes = require("./routes/coordinates");

//Use the routes.
app.use("/city", cityRoutes);
app.use("/coordinates", coordinatesRoutes);

//Sets the port to listen on.
app.listen(3000);
