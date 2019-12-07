var express = require("express");
var app = express();

// "/" "hi there, welcome to my assignment"
app.get("/", function(req, res){
    res.send("hi there, welcome to my assignment");
})

app.get("/speak/:animal", function(req, res){
    var sounds = {
        pig: "Oink",
        cow: "Moo",
        dog: "Woof",
        cat: "I hate you human",
        goldfish: "..."
    }
    var animal = req.params.animal.toLowerCase();
    var sound = sounds[animal];
    res.send("the " + animal + " says '" + sound + "'");
})


app.get("/repeat/:message/:times", function(req, res){
    var message = req.params.message;
    var times = req.params.times;
    var result = "";
    for(var i = 0; i < times; i++){
        result += message + "";
    }
    res.send(result);

})
app.listen(3050, function(){
    console.log("server started on port 3050");
})