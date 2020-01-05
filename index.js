let express = require("express");
let bodyParser = require("body-parser");
let mongoose = require("mongoose");
let cors = require("cors");
const dotenv = require("dotenv");
let apiRouter = require("./api-router");
dotenv.config();
let port = process.env.port
let dbcon = process.env.cloud_mongodb_con;

let app = new express();
app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json());

mongoose.connect(dbcon, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

var con = mongoose.connection;

if (!con) console.log("mongoDB'ye bağlanılamadı.")
else {
    console.log("mongoDB'ye başarıyla bağlanıldı")
}
//http://localhost/api
app.use("/api", apiRouter)
app.get("/", (req, res) => {
    res.send("Hello world")
})

app.listen(port, () => {
    console.log("node.js server çalışıyor...")
})