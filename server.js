const express = require('express');
const app = express();
const port =  process.env.PORT || 5000;
const cors = require ("cors");
const bodyParser = require('body-parser');

// app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

//Phone pe route
const phonepeRoute = require("./routes/PhonePeRoute")
app.use("/api/phonepe", phonepeRoute);


app.get('/', (req, res) => {
    res.send('Hello, this is the root path!');
  });

app.listen(port, () =>{
    console.log(`App runing in the port ${port}`);
});
