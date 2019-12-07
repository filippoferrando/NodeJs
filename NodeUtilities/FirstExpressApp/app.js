var express = require("express");
var app = express();

// "/" => "hi there"
app.get("/", function(req, res){
    res.send("hi there!");
    console.log("someone made a request to /!");
// "/bye" => "goodbye"
app.get("/bye", function(req, res){
    res.send("Goodbye!");
    console.log("someone made a request to /bye!");
})
// "/dog" => "meow"
app.get("/dog", function(req, res){
    res.send("Meow!");
    console.log("someone made a request to /dog!")
    
})
//subreddit test
app.get("/r/:subredditName", function(req ,res){
    //the title in the url will be printed dinamicly in the page
    var subreddit = req.params.subredditName;
    console.log(req.params);
    res.send("WELCOME TO the " + subreddit.toUpperCase() +" subreddit");
})
//subreddit comment test
app.get("/r/:subreddit/comments/:id/:title/", function(req, res){
    console.log(req.params);
    res.send("WELCOME TO THE COMMENT PAGE");
})
// if no one of the precedent route match, thi print out "you are a star"
app.get("*", function(req, res){
    res.send("you are a star!")
})

// start express server
})
app.listen(3300, function(){
    console.log("server started!")

});



