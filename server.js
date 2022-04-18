let express = require("express");
let app = express();
var cors = require('cors')
var bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
let connectDB = require("./config/db");
const router = require("./router/api/users");
app.use(cors());
connectDB();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json({ extended: false }));
app.get("/", (req, res) => res.send("API RUNNING"));
app.use("/api/users", require("./router/api/users"));
app.use("/api/admin", require("./router/api/admin"));
app.use("/api/dealers", require("./router/api/dealers"))
app.use("/api/auth", require("./router/api/auth"));
app.use("/api/service", require("./router/api/service"))
let PORT =  1000 || process.env.PORT;
app.listen(PORT, () => console.log(`Server Started on port ${PORT}`));
