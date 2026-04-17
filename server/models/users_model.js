const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
      Name:{
          type: String,
          require:true
      },
      Username:{
            type:String,
            require:true
      },
      Email:{
              type:String,
              require:true
      },
      Phone:{
              type:Number,
              require:true
      },
      Gender:{
            type:String,
            require:true
      },
      Country:{
           type:String,
           require:true
      },
      Password:{
           type:String,
           require:true
      },
      Account_Type:{
          type:String,
          require:true
      },
      createAt:{
        type: String, // Store as a formatted string
        default: function () {
            let today = new Date();
            let day = String(today.getDate()).padStart(2, "0");
            let month = String(today.getMonth() + 1).padStart(2, "0"); // Months are 0-based
            let year = today.getFullYear();
            return `${day}-${month}-${year}`
        }
    }
})


module.exports = mongoose.model("Users",userSchema);