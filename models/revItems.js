const mongoose = require("mongoose");


const RevSchema = new mongoose.Schema({
    resID:String,
    name:String,
    review:String,
    rating:Number
});

const RevModel = mongoose.model("reviews", RevSchema);

module.exports = RevModel;


