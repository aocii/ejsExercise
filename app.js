var express = require("express");
var app = express();
var parser = require("body-parser");



app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(parser.urlencoded({extended:true}));

app.get("/", function (q, a) {
    a.render("home");
});

app.get("/yamaha/:prm", function (q, a) {
    var model = q.params.prm;
    a.render("yamaha", { "mdl": model });
});


app.get("/honda", function (q, a) {
    var asdf = [
        { mod: "600rr", year: "2007", image: "https://cdn.shopify.com/s/files/1/0616/3409/products/DSCF3064.JPG?v=1563900265" },
        { mod: "600rr", year: "2015", image: "https://yakittuketimi.net/wp-content/uploads/2012/05/honda-cbr600rr-2015.jpg" }
    ]

    a.render("honda", { "mdl1": asdf });
});


var bikes = ["yamaha","honda","suzuki","kawasaki","triumph"]

app.get("/bikes",function(q,a){

    a.render("bikes",{motorbikes: bikes});
});

app.post("/addbike",function(a,q){
    var byk = a.body.bykie;

    bikes.push(byk);

    q.redirect("/bikes")
});

app.get("*", function (q, a) {
    a.send("you type wrong");
});

app.listen(1300, function () {
    console.log("localhost hayabusada açılıyor")
});

