const express = require('express');
const router = express.Router();
const {
  getAllData,
  getDataById,
  addNewData,
  editData,
  removeData
} = require('../Controllers/homeControllers')

router.get('/', getAllData)
router.post('/add',addNewData)
router.get('/:id', getDataById);
router.put('/:id', editData);
router.delete('/:id', removeData);


module.exports = router
