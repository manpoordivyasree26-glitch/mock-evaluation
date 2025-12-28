import {useState} from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import FleetCard from "../components/FleetCard";

const AdminDashboard=()=>{
const [fleets,setFleets]=useState([])
const [form,setform]=useState({
    regNo:"",
    category:"",
    driver:"",
    status:"Available",
})
const addFleet=()=>{
    if(!form.regNo || !form.category || !form.driver){
        alert("All fields are requried");
        return;
    }
    setFleets([...fleets,{...form,id:Date.now()}]);
    setform({regNo:"", category:"",driver:"",status:"Available"});

};
const deleteFleet=(id)=>{
    if(window.confirm("Are you sure?")){
        setFleets(fleets.filter((f)=>f.id !==id));
    }
};
const toggleStatus=(id)=>{
    setFleets(
        fleets.map((f)=>
        f.id===id
    ? {...f,status:f.status === "Available" ? "Unavaailable":"Available"}:f
)
    )
}
const updateDriver=(id)=>{
    const name=prompt("enter new driver name");
    if(!name || !name.trim()) 
        return;
    setFleets(
        fleets.map((f)=>
        f.id ===id ? {...f,driver:name}:f
    )
    );
};

return(
    <div>
        <Navbar/>
        <Sidebar/>
        <h2>Add Fleet</h2>
        <input
        placholder="Vehicle Reg No"
        value={form.regNo}
        onChange={(e)=>setform({...form,regNo:e.target.value})}>
     </input>
     <select
     value={form.category}
     onChange={(e)=>setcategory({...form,category:e.target.value})}>


     </select>
    </div>
)
}
export default AdminDashboard;