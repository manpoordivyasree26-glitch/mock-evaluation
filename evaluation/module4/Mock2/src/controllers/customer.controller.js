import supabase from "../config/supabase.js";

export const registerCustomer= async (req,res)=>{
 const{full_name,email,phone}=req.body;
 if(!full_name || !email || !phone){
    return res.status(400).json({message:"All fields are requried"});
 }
 const {error}= await supabase
 .from("customers")
 .insert([{full_name,email,phone}]);

 if(error){
    return res.status(409).json({message:"error.message"})
 }
 res.status(201).json({message:"Customer registration succesfully"});
}