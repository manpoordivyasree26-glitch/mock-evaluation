import {Routes,Route} from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import {useState} from "react";

function App(){
  const[isAuth,setIsAuth]=useState("false")
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login setIsAuth={setIsAuth}/>}/>
      <Route path="/admin" element={<ProtectedRoute isAuth={isAuth}>
        <AdminDashboard/>
      </ProtectedRoute>
    }
    />
    </Routes>
    </BrowserRouter>
  )
}
export default App;