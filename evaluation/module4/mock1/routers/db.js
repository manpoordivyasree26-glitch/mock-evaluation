import fs from "fs";

const DB_PATH="./db.json";

export const readDB=()=>JSON.parse(fs.readFileSync(DB_PATH,"UTF-8"));
export const writeDB=(data)=>fs.writeFileSync(DB_PATH, JSON.Stringify(data,null,2));