//require mongoose to run queries
const mongoose = require('mongoose');
//declare schema with name todoSchema
const todoSchema = new mongoose.Schema({
    description:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    due_date:{
        type: String,
        required: true
    },
    critical:{
        type: String,
        default: 'false'
    }
});
//cionvert todoSchema schema to model named Todo
const Todo = mongoose.model('Todo', todoSchema);
//export Todo model
module.exports = Todo;