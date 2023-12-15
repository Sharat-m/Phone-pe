const express = require("express");
const app = express();
const port = 5000;
const cors = require ("cors");

app.use(express.json());
app.use(cors());

//Phone pe route
const phonepeRoute = require("./routes/PhonePeRoute")
app.use("/api/phonepe", phonepeRoute);

app.listen(port, () =>{
    console.log(`App runing in the port ${port}`);
});