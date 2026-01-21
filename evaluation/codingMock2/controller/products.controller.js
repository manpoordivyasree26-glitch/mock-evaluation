import {readDB,writeDB} from "../utils/db.js"


export const getProducts=(req,res)=>{
    const db=readDB();
    res.status(200).json(db.products)
}

export const addProducts=(req,res)=>{
    const db=readDB();
    const newProduct={id:Date.now(),...req.body}
    db.products.push(newProduct);
    writeDB();
    res.status(201).json(newProduct)

}