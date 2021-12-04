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
app.use("/invoices", require("./routes/invoice.js"));
app.use("/products", require("./routes/product.js"));

const port = process.env.PORT || 3000;

app.listen(port, function() {
    console.log(`Listening on ${port}....`);
});
