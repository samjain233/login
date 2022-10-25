const express = require("express");
const bodyParser = require("body-parser");
const port = process.env.PORT || 3000;

require("./src/db/conn");
const User = require("./src/models/user");

const app = express();
app.use(express.static("public"));
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));


app.get("/",(req,res)=>{
    res.render("login.ejs");
});

app.post("/login", async (req,res)=>{
    try {
        const email = req.body.email;
        const password = req.body.pswd;
        
        const userpsswd = await User.findOne({email:email}).select({password:1});
        res.send(userpsswd);
    } catch (error) {
        res.status(400).send(error);
    }
});

app.post("/register", async (req,res)=>{
    try {
        const email = req.body.email;
        const password = req.body.pswd;
        const username = req.body.txt;
        
        const newUser = new User({
            username : username,
            email : email,
            password : password
        });
        const result = await newUser.save();
        res.send(result);

    } catch (error) {
        res.status(400).send(error);
    }
});

app.listen(port,(req,res)=>{
    console.log(`server started on port : ${port}`);
});
