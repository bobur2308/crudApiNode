const mongoModel = require('../models/mongoModel')

// method -get, 
// descr-getAllData
const getAllData = async(req,res)=>{
  try {
    const data = await mongoModel.find()
    return res.status(200).json({
      message:'succes',
      data:data.reverse()
    })
    
  } catch (err) {
    res.send(err)
  }
}
// Method -GET
//Descr  - get one by id
const getDataById = async (req,res)=>{
  try {
    const data = await mongoModel.findById(req.params.id)
    
    if(!travel){
      return res.status(404).json({
        message:"Not Found"
      })
    }
    return res.status(200).json({
      message:'succes',
      data
    })
  } catch (err) {
    res.send(err)
  }
}

// Method - POST
// Descr = add new data
const addNewData = async(req,res)=>{
  try {
    const {name,email,password} = req.body
    const newData = await mongoModel.create({
      name,
      email,
      password
    })
    res.status(201).json({
      message:"Succes",
      newData
    })
  } catch (err) {
    res.send(err)
  }
}

// method-put
// edit data by its id
const editData = async(req,res)=>{
  try {
    const {name,email,password} = req.body
    const updatedData = await mongoModel.findByIdAndUpdate(req.params.id,{
      name,
      email,
      password
    })
    res.status(200).json({
      message:"Succes",
      updatedData
    })
  } catch (err) {
    res.send(err)
  }
}

// Method - Delete
// Descr - remove data by id

const removeData = async(req,res)=>{
  try {
    await mongoModel.findByIdAndRemove(req.params.id)
    res.status(200).json({
      message:"Deleted"
    })
  } catch (err) {
    res.send(err)
  }
}





module.exports = {
  getAllData,
  getDataById,
  addNewData,
  editData,
  removeData
}