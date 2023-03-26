const {Schema,model} = require('mongoose')

const mongoModel = new Schema({
  name:{
    type:String,
    reuqired:true,
    minlength:3
  },
  email:{
    type:String,
    reuqired:true
  },
  password:{
    type:String,
    reuqired:true
  }
})

module.exports = model('mongoModel',mongoModel)