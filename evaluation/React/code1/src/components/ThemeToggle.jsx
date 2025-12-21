import {useContext} from "react";

import {ThemeContext} from "../context/ThemeContext";

const ThemeToggle=()=>{
const {toggleTheme}=useContext(ThemeContext);
return <button onclick={toggleTheme}>Switch Theme</button>
};
export default ThemeToggle;