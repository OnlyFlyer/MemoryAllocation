/**
 * Created by wutao on 16/11/17.
 */
express = require("express");
fs = require("fs");
url = require("url");
app = express();

app.use(express.static("./public"));
app.get("/parse",function(){});
app.listen(3000);
console.log("server start!");