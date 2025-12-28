import React from "react";

const FleetCard=({fleet,onDelete,onToggle,onUpdate})=>{
    return(
        <div style={{border:"1px solid black",
            margin:"10px"
        }}>
            <p>Vehicle Reg No:{fleet.regNo}</p>
            <p>Category:{fleet.category}</p>
            <p>Driver:{fleet.driver}</p>
            <p>Status:{fleet.status}</p>
            <button onClick={()=>onToggle(fleet.id)}>ToggleStatus</button>
            <button onClick={()=>onUpdate(fleet.id)}>UpdateStatus</button>
            <button onClick={()=>onDelete(fleet.id)}>DeleteStatus</button>
        </div>
    )
}
export default React.memo(FleetCard);