var express = require("express");
var app = express();
var fs = require("fs");


// serve your css as static
 
app.use(express.static(__dirname + "/../frontend"));
app.get("/", (req, res) => { 
     
    fs.readFile(__dirname + "/../frontend/index.html", function (err, data) {


        if (err) {
            res.status(404).send("Not Found")
            console.log("hata")
        } else {

            res.write(data);
            res.end("");
        }


    })
});
app.post("/a",(req, res)=>{
    fs.readFile(__dirname + "/../frontend/aaa.html", function (err, data) {


        if (err) {
            res.status(404).send("Not Found")
            console.log("hata")
        } else {
            console.log("post geldi")
            res.write(data);
            res.end("");
        }


    })
})

app.listen(80, () => {
    console.log("Application started and Listening on port 80");
   
});
 