const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");
const router = require("./router");

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({
    credentials: true,
    origin: "*"
}));

// Use your router
app.use("/api/v1/users", router);

const start = async () => {
    try {
        app.listen(5000, () => console.log("Server started at port 5000"));
    } catch (e) {
        console.error(e);
    }
};

start();
