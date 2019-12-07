var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app");
//schema of data in db
var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

var Cat = mongoose.model("Cat", catSchema);
//--slow create and save SEPARATE use--
var george = new Cat({
    name: "Mrs. Norris",
    age: 7,
    temperament: "Evil"
});

//save with callback func

george.save(function(err, cat){
    if(err){
        console.log("SOMETHING WENT WRONG!");
    } else {
        console.log("JUST SAVED A CAT TO THE DB:");
        console.log(cat);
    }
});
//--end--

//create func with callback for evanishing error
Cat.create({
    name: "Snow balle III",
    age : 15,
    temperament: "Bland"
}, function(err, cat){
    if(err){
        console.log(err);
        console.log("FUCKING ERROR");
    } else {
        console.log("FUKING CATS");
        console.log(cat);
        
    }
});


//find func (retriving cats), with callback
Cat.find({}, function(err, cats){
    if(err){
        console.log("THERE IS AN ERROR!");
        console.log(err);
    } else {
        console.log("CATS SUCCEFULL RETRIVED");
        console.log(cats);
    }
});