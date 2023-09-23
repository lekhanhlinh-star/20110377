const express=require("express");
const router=express.Router();
const GroupController=require("../controllers/group")

router.get("/",GroupController.getAllInfoGroup);
router.post("/20110377/:id",GroupController.addNewMenberToGroup)
router.get("/20110377/:id",GroupController.getInfoById)
router.get("/message/:id?",GroupController.getMessageById)

module.exports=router