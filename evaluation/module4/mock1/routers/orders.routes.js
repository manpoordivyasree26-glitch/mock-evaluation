import {Router} from "express"
import{readDB,writeDB} from "./db.js";

const router=Router();
router.post("/",(req,res)=>{
    const{productId,quality}=req.body
})