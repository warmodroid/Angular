var express = require('express');
var app = express();

var mongodb = require('mongodb');
var mongoClinet = mongodb.MongoClient;
const url = "mongodb://localhost:27017";



app.use(express.static(__dirname));

app.use(function(req, res, next) {  
    res.header("Access-Control-Allow-Origin", "*");  
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With,Content-Type, Accept"); 
    next();
});

app.get('/blocks',function(req,res){
    console.log(req.query.name);
    console.log(req.query.age);

    var data;

    mongoClinet.connect(url,function(err,client){
        if(err){
            console.log("database connection failed");
        }
        else{
            console.log("databse connected");
            const db = client.db('myProject');
            db.collection("users").insertOne({
                name:req.query.name,
                age:req.query.age
            });

            db.collection("users").find({}).sort({name:1}).toArray(function(err,result){
                if(err){
                    console.log(err);
                }
                else{
                    //console.log(result);
                    data = result;
                    res.json(result);
                }
            });

            client.close();
        }
    });

    
});

app.listen(3000);