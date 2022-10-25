const bcrypt= require("bcryptjs");

const hash = async (password)=>{
    const saltRounds = 3;
    const hashpassword = await bcrypt.hash(password , saltRounds);
    return hashpassword;
}

const compare = async (enteredpassword , originalpassword)=>{
    const result = await bcrypt.compare(enteredpassword,originalpassword);
    return result;
}

module.exports= {hash,compare};