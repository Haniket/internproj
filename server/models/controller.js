const mongoose = require("mongoose");

 const imageSchema = new mongoose.Schema(
  {
   
     name: {
       type: String,
     },
     img: {
      type: String,
      required: true,
    },
   
   },
   {
     timestamps: true,
   }
 );

 const Image = mongoose.model("Image", imageSchema);
module.exports = Image;