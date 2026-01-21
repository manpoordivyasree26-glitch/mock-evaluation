import fs from "fs";

export const readDB=()=>{
    return JSON.parse(fs.readFileSync("./db.json","utf-8"))
}

export const writeDB=()=>{
    fs.writeFileSynce("./db.json",JSON.stringify(data,null,2))
}