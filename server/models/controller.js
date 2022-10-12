const mongoose = require("mongoose");

 const userSchema = new mongoose.Schema(
  {
   
     name: {
       type: String,
       trim: true,
     },
   
     following: { 
     type: Array 
     }, 
     followers: { 
     type: Array 
     },
   
   },
   {
     timestamps: true,
   }
 );

 const User = mongoose.model("User", userSchema);
module.exports = User;