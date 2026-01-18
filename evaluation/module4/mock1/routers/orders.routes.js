import {Router} from "express"
import{readDB,writeDB} from "./db.js";

const router=Router();
router.post("/",(req,res)=>{
    const{productId,quantity}=req.body;
    const db=readDB();
    const product=db.products.find(p=>p.id ==productId);
    if(!product)
        return
    res.status(404).json({message:"Product not found"});

    if(product.stock === 0)
        return
    res.status(404).json({message:"out of stock"});

    if(quantity>product.stock)
        return
    res.status(404).json({message:"InSufficient stock"})


    const totalAmount=product.price * quantity;
    const newOrder={
        id:db.order={
            id:id.orders.length+1,
            productId,
            quantity,
            totalAmount,
            status:"placed",
            createdAt:new Date().toISOString().split("T")
            [0]
        }
        

     };
     db.orders.push(newOrder);
     product.stock =quantity;
     writeDB(db);
     return res.status(404).json(newOrder)

   
})
//get all order
router.get("/",(req,res)=>{
const db=readDB();
res.json(db.orders)
});

//cancel order
//delete order
router.delete("/:orderId",(req,res)=>{
    const{orderId}=req.params;
    const db=readDB();
    const order=db.orders.find(o=>o.id == orderId);
    if(!order)
        return 
    res.status(404).json({message:"order already cancelled"})

    const today=newDate().toISOString().split("T")[0];
    if(order.createdAt !== today){
        return res.status(400).json({message:"cancel only allowed on same day"})
    }
    order.status="cancelled";
    const product=db.products.find(p=>p.id == order.productId);
    product.stock =+ order.quantity;
    writeDB(db);
    return res.json({message:"Order Cancelled successfully"});

})
export default router;