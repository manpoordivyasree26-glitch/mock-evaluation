import { Router } from "express";
import {readDB,writeDB} from "./db.js";

const router=Router();

router.get("/",(req,res)=>{
const db=readDB();
res.json(db.products);
})
router.post("/",(req,res)=>{
    const {name,price,stock}=req.body;
    const db=readDB();

    if(!name || !price || !stock){
        return res.status(400).json({message:"fill all the requried fields"});
}
const newProduct={
    id:db.products.length+1,
name,
price,
stock
};
db.products.push(newProduct);
writeDB(db);
return res.status(201).json(newProduct);
})
export default router;