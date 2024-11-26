const { type } = require('express/lib/response')
const mongoose = require('mongoose')
const postSchema = mongoose.Schema({
    title:{type: String, required:true},
    content:{type: String}
}

)