const express=require("express")
const { addTransection, gettAllTransection,editTransection,deleteTransection } = require("../controllers/transactionController")

const router=express.Router()

router.post('/add-transection',addTransection)
router.post('/edit-transection',editTransection)
router.post('/delete-transection',deleteTransection)
router.post('/get-transection',gettAllTransection)
module.exports=router