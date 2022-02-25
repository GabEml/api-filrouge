const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
require("dotenv").config();

const app = express();

app.use(cors());
app.options('*', cors());

app.use(express.static("public"));
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.use("/users", require("./routes/user.js"));
app.use("/appointments", require("./routes/appointment.js"));
app.use("/organisations", require("./routes/organisation.js"));
app.use("/customers", require("./routes/customer.js"));

const port = process.env.PORT || 3000;

app.listen(port, function() {
    console.log(`Listening on ${port}....`);
});
