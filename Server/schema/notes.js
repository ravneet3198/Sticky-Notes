const mongoose = require('mongoose');
const stickySchema = mongoose.Schema({
    createdBy:{
        type:String,
        require:true
    },
    note:{
        type:String,
        require:true
    },
    likes:{
        type:Number,
        default:0
    }

})


const notesModel = mongoose.model('stickyNotes',stickySchema);

module.exports = notesModel