import supabase from "../config/superbase.js";

export const createOrder=async(req,res)=>{
  const {product_name,quantity,price,customerId}=req.body;
  if(!product_name || !quantity || !price || !customerId){
    return res.status(400).json({message:"All fields are requried"})

  }
  const{error}=await
  supabase.from("orders").insert([
    {
        product_name,
        quantity,
        price,
        customer_id:customerId
    }
  ]);

  if(error){
    return res.status(400).json({message:error.message});
  }
  res.status(201).json({message:"order created succesfully"})
};