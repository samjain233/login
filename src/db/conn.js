const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/login",{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log(`connection successful`);
}).catch((err)=>{
    console.log(err);
});

