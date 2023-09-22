const mongoose =require("mongoose");

const PlayersSchema = new mongoose.Schema(
    {
        name :{
            type : String,
            minlength: [3,"Name should be at least 3 Characters."],
            required: [true, "Name is required."],
        },
        status:{
            type: String,
            enum: ["playing", "not-playing", "undecided"],
            default :"undecided"
        },
        position:{
            type: [String],
        },
        gameNumber: {
            type: Number,
            required: [true, "Game number is required."],
          }
    }
)



module.exports = mongoose.model("Players", PlayersSchema);